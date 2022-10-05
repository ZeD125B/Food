export default function getTabs(tabsSelector, tabHeaderSelector, tabHeaderItemsSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector);
  const tabHeader = document.querySelector(tabHeaderSelector);
  const tabHeaderItems = tabHeader.querySelectorAll(tabHeaderItemsSelector);

  function hideTabsContent() {
    tabs.forEach((item) => {
      item.classList.add('hideContent');
      item.classList.remove('fade');
      tabHeaderItems.forEach((tab) => {
        tab.classList.remove(activeClass);
      });
    });
  }

  function showTabContent(i = 0) {
    tabHeaderItems[i].classList.add(activeClass);
    tabs[i].classList.remove('hideContent');
    tabs[i].classList.add('fade');
  }

  tabHeader.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains(tabHeaderItemsSelector.slice(1))) {
      tabHeaderItems.forEach((item, i) => {
        if (item === e.target) {
          hideTabsContent();
          showTabContent(i);
        }
      });
    }
  });

  hideTabsContent();
  showTabContent();
}
