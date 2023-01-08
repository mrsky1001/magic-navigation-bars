const setListenersForActiveTabs = (queryString) => {
    const list = document.querySelectorAll(queryString)

    const activeLink = (t) => {
        list.forEach((item) => {
            item.classList.remove('active');
            t.classList.add('active');
        })
    }

    list.forEach(item => {
        item.addEventListener('click', () => activeLink(item))
    })
}


setListenersForActiveTabs('.bubble-up .navigation > ul > li.list')
setListenersForActiveTabs('.bubble-down .navigation  > ul > li.list')
setListenersForActiveTabs('.convex-up .navigation  > ul > li.list')
setListenersForActiveTabs('.convex-down .navigation  > ul > li.list')
