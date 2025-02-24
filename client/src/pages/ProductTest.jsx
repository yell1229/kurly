import React,{useState, useRef, useEffect} from 'react';

import ProductInfo from '../components/detail/ProductInfo.jsx';
import DetailInfo from '../components/detail/DetailInfo.jsx';
import ReviewInfo from '../components/detail/ReviewInfo.jsx';
import InquireInfo from '../components/detail/InquireInfo.jsx';
import ProductMypage from './ProductMypage.jsx';
import useFixedScroll from './useFixedScroll.js';

export default function ProductTest() {
    const tabsData = [
        { id: "goodsDetailTab", label: "상품정보", href: "#goodsDetailTabs", content: <ProductInfo /> },
        { id: "sizeTab", label: "사이즈&핏", href: "#goodsDetailTabs", content: <DetailInfo /> },
        { id: "reviewTab", label: "리뷰", href: "#goodsDetailTabs", content: <ReviewInfo /> },
        { id: "recommendTab", label: "추천", href: "#goodsDetailTabs", content: <InquireInfo /> }
    ];

    const [activeTab, setActiveTab] = useState(tabsData[0]?.id || "");

    const contentRefs = useRef({});

    
    useEffect(() => {
        const handleScroll = () => {
            let closestTab = activeTab;

            // 각 콘텐츠의 위치를 확인하여 활성 탭 변경
            for (const tab of tabsData) {
                const contentEl = contentRefs.current[tab.id];

                if (contentEl) {
                    const rect = contentEl.getBoundingClientRect();
                    
                    // 화면 중앙 근처에 위치하는 콘텐츠를 찾음
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        closestTab = tab.id;
                        break;
                    }
                }
            }

            if (closestTab !== activeTab) {
                setActiveTab(closestTab);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeTab]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        const contentEl = contentRefs.current[tabId];

        if (contentEl) {
            contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const { ref: tabRef, isFixed } = useFixedScroll();

    return (
        <div className="detail-wrap content-wrap" style={{ position: "relative" }}>
            {/* <DetailTop /> */}
            <div className="gods-summary" view-section="summary">
                {/* <DetailImage />
                <DetailOrder /> */}
            </div>

            <div
                ref={tabRef}
                className={`product-mypage-container ${isFixed ? "fixed" : ""}`}
                style={{
                    position: isFixed ? "fixed" : "relative",
                    top: isFixed ? "0" : "auto",
                    width: "100%",
                    maxWidth: "1440px",
                    zIndex: 1000,
                }}
            >
                <ProductMypage
                    tabs={tabsData}
                    activeTab={activeTab}
                    setActiveTab={handleTabClick} // 클릭 시 스크롤 이동 추가
                />
            </div>

            {/* 기존 콘텐츠 영역 활용 및 스크롤 동기화 */}
            <div>
                {tabsData.map((tab) => (
                    <div 
                        key={tab.id} 
                        ref={(el) => (contentRefs.current[tab.id] = el)} 
                        style={{ padding: "50px 0", borderBottom: "1px solid #ccc" }}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

