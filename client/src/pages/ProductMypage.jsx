//이건 탭 메뉴를 보여주는 컴포넌트입니다. 
export default function ProductMypage({ tabs = [], activeTab, setActiveTab }) {
    return (
        <div className="gods-detail">
            <div className="tab-rects" role="tablist" 
            style={{ width: "auto", transform: "translateY(0px)", backgroundColor: "green" }}>
                <ul id="goodsDetailTabs">
                    {tabs.map((tab) => (
                        <li style={{display:'inline-block',width:'25%'}}
                            key={tab.id}
                            id={tab.id}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)} // 클릭 시 부모컴포넌트의 상태 변경
                        >
                            <a href={tab.href} role="button" tabIndex="0" style={{fontSize:'20px'}}>
                                {tab.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}