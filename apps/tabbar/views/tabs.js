Tabbar.tabs = M.TabBarView.design({

    childViews: 'tabItem1 tabItem2 tabItem3 tabItem4 tabItem5',

    anchorLocation: M.BOTTOM,

    name: 'tabbar1',

    tabItem1: M.TabBarItemView.design({

        value: 'tab1',
        page: 'Tabbar.app.page1',
        href: 'm_10',
        icon: 'bird',
        isActive: YES

    }),

    tabItem2: M.TabBarItemView.design({

        value: 'tab2',
        page: 'Tabbar.app.page2',
        href: 'm_14',
        icon: 'eye'

    }),

    tabItem3: M.TabBarItemView.design({

        value: 'tab3',
        page: 'Tabbar.app.page3',
        icon: 'beer'

    }),

    tabItem4: M.TabBarItemView.design({

        value: 'tab4',
        page: 'Tabbar.app.page4',
        icon: 'gift'

    }),

    tabItem5: M.TabBarItemView.design({

        value: 'tab5',
        page: 'Tabbar.app.page5',
        icon: 'heart'

    })

})