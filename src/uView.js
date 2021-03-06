import Vue from "vue";

import uButton from "uview-ui/components/u-button/u-button";
import uActionSheet from "uview-ui/components/u-action-sheet/u-action-sheet";
import uAlertTips from "uview-ui/components/u-alert-tips/u-alert-tips";
import uAvatar from "uview-ui/components/u-avatar/u-avatar";
import uBackTop from "uview-ui/components/u-back-top/u-back-top";
import uBadge from "uview-ui/components/u-badge/u-badge";
import uCalendar from "uview-ui/components/u-calendar/u-calendar";
import uCard from "uview-ui/components/u-card/u-card";
import uCarKeyboard from "uview-ui/components/u-car-keyboard/u-car-keyboard";
import uCellGroup from "uview-ui/components/u-cell-group/u-cell-group";
import uCellItem from "uview-ui/components/u-cell-item/u-cell-item";
import uCheckbox from "uview-ui/components/u-checkbox/u-checkbox";
import uCheckboxGroup from "uview-ui/components/u-checkbox-group/u-checkbox-group";
import uCircleProgress from "uview-ui/components/u-circle-progress/u-circle-progress";
import uCol from "uview-ui/components/u-col/u-col";
import uCollapse from "uview-ui/components/u-collapse/u-collapse";
import uCollapseItem from "uview-ui/components/u-collapse-item/u-collapse-item";
import uColumnNotice from "uview-ui/components/u-column-notice/u-column-notice";
import uCountDown from "uview-ui/components/u-count-down/u-count-down";
import uCountTo from "uview-ui/components/u-count-to/u-count-to";
import uDivider from "uview-ui/components/u-divider/u-divider";
import uDropdown from "uview-ui/components/u-dropdown/u-dropdown";
import uDropdownItem from "uview-ui/components/u-dropdown-item/u-dropdown-item";
import uEmpty from "uview-ui/components/u-empty/u-empty";
import uField from "uview-ui/components/u-field/u-field";
import uForm from "uview-ui/components/u-form/u-form";
import uFormItem from "uview-ui/components/u-form-item/u-form-item";
import uFullScreen from "uview-ui/components/u-full-screen/u-full-screen";
import uGap from "uview-ui/components/u-gap/u-gap";
import uGrid from "uview-ui/components/u-grid/u-grid";
import uGridItem from "uview-ui/components/u-grid-item/u-grid-item";
import uIcon from "uview-ui/components/u-icon/u-icon";
import uImage from "uview-ui/components/u-image/u-image";
import uIndexAnchor from "uview-ui/components/u-index-anchor/u-index-anchor";
import uIndexList from "uview-ui/components/u-index-list/u-index-list";
import uInput from "uview-ui/components/u-input/u-input";
import uKeyboard from "uview-ui/components/u-keyboard/u-keyboard";
import uLazyLoad from "uview-ui/components/u-lazy-load/u-lazy-load";
import uLine from "uview-ui/components/u-line/u-line";
import uLink from "uview-ui/components/u-link/u-link";
import uLoading from "uview-ui/components/u-loading/u-loading";
import uLoadingPage from "uview-ui/components/u-loading-page/u-loading-page";
import uLoadMore from "uview-ui/components/u-loadmore/u-loadmore";
import uMask from "uview-ui/components/u-mask/u-mask";
import uMessageInput from "uview-ui/components/u-message-input/u-message-input";
import uModal from "uview-ui/components/u-modal/u-modal";
import uNavbar from "uview-ui/components/u-navbar/u-navbar";
import uNoNetwork from "uview-ui/components/u-no-network/u-no-network";
import uNoticeBar from "uview-ui/components/u-notice-bar/u-notice-bar";
import uNumber from "uview-ui/components/u-number-box/u-number-box";
import uNumberKeyboard from "uview-ui/components/u-number-keyboard/u-number-keyboard";
import uParse from "uview-ui/components/u-parse/u-parse";
import uPicker from "uview-ui/components/u-picker/u-picker";
import uPopup from "uview-ui/components/u-popup/u-popup";
import uRadio from "uview-ui/components/u-radio/u-radio";
import uRadioGroup from "uview-ui/components/u-radio-group/u-radio-group";
import uRate from "uview-ui/components/u-rate/u-rate";
import uReadMore from "uview-ui/components/u-read-more/u-read-more";
import uRow from "uview-ui/components/u-row/u-row";
import uRowNotice from "uview-ui/components/u-row-notice/u-row-notice";
import uSearch from "uview-ui/components/u-search/u-search";
import uSection from "uview-ui/components/u-section/u-section";
import uSelect from "uview-ui/components/u-select/u-select";
import uSkeleton from "uview-ui/components/u-skeleton/u-skeleton";
import uSlider from "uview-ui/components/u-slider/u-slider";
import uSteps from "uview-ui/components/u-steps/u-steps";
import uSticky from "uview-ui/components/u-sticky/u-sticky";
import uSubsection from "uview-ui/components/u-subsection/u-subsection";
import uSwipeAction from "uview-ui/components/u-swipe-action/u-swipe-action";
import uSwiper from "uview-ui/components/u-swiper/u-swiper";
import uSwitch from "uview-ui/components/u-switch/u-switch";
import uTabBar from "uview-ui/components/u-tabbar/u-tabbar";
import uTable from "uview-ui/components/u-table/u-table";
import uTabs from "uview-ui/components/u-tabs/u-tabs";
import uTabsSwiper from "uview-ui/components/u-tabs-swiper/u-tabs-swiper";
import uTag from "uview-ui/components/u-tag/u-tag";
import uTd from "uview-ui/components/u-td/u-td";
import uTh from "uview-ui/components/u-th/u-th";
import uTimeLine from "uview-ui/components/u-time-line/u-time-line";
import uToast from "uview-ui/components/u-toast/u-toast";
import uTopTips from "uview-ui/components/u-top-tips/u-top-tips";
import uTr from "uview-ui/components/u-tr/u-tr";
import uUpload from "uview-ui/components/u-upload/u-upload";
import uVerificationCode from "uview-ui/components/u-verification-code/u-verification-code";
import uWaterfall from "uview-ui/components/u-waterfall/u-waterfall";

Vue.component("uButton", uButton);
Vue.component("uActionSheet", uActionSheet);
Vue.component("uAlertTips", uAlertTips);
Vue.component("uAvatar", uAvatar);
Vue.component("uBackTop", uBackTop);
Vue.component("uBadge", uBadge);
Vue.component("uCalendar", uCalendar);
Vue.component("uCard", uCard);
Vue.component("uCarKeyboard", uCarKeyboard);
Vue.component("uCellGroup", uCellGroup);
Vue.component("uCellItem", uCellItem);
Vue.component("uCheckbox", uCheckbox);
Vue.component("uCheckboxGroup", uCheckboxGroup);
Vue.component("uCircleProgress", uCircleProgress);
Vue.component("uCol", uCol);
Vue.component("uCollapse", uCollapse);
Vue.component("uCollapseItem", uCollapseItem);
Vue.component("uColumnNotice", uColumnNotice);
Vue.component("uCountDown", uCountDown);
Vue.component("uCountTo", uCountTo);
Vue.component("uDivider", uDivider);
Vue.component("uDropdown", uDropdown);
Vue.component("uDropdownItem", uDropdownItem);
Vue.component("uEmpty", uEmpty);
Vue.component("uField", uField);
Vue.component("uForm", uForm);
Vue.component("uFormItem", uFormItem);
Vue.component("uFullScreen", uFullScreen);
Vue.component("uGap", uGap);
Vue.component("uGrid", uGrid);
Vue.component("uGridItem", uGridItem);
Vue.component("uIcon", uIcon);
Vue.component("uImage", uImage);
Vue.component("uIndexAnchor", uIndexAnchor);
Vue.component("uIndexList", uIndexList);
Vue.component("uInput", uInput);
Vue.component("uKeyboard", uKeyboard);
Vue.component("uLazyLoad", uLazyLoad);
Vue.component("uLine", uLine);
Vue.component("uLink", uLink);
Vue.component("uLoading", uLoading);
Vue.component("uLoadingPage", uLoadingPage);
Vue.component("uLoadMore", uLoadMore);
Vue.component("uMask", uMask);
Vue.component("uMessageInput", uMessageInput);
Vue.component("uModal", uModal);
Vue.component("uNavbar", uNavbar);
Vue.component("uNoNetwork", uNoNetwork);
Vue.component("uNoticeBar", uNoticeBar);
Vue.component("uNumber", uNumber);
Vue.component("uNumberKeyboard", uNumberKeyboard);
Vue.component("uParse", uParse);
Vue.component("uPicker", uPicker);
Vue.component("uPopup", uPopup);
Vue.component("uRadio", uRadio);
Vue.component("uRadioGroup", uRadioGroup);
Vue.component("uRate", uRate);
Vue.component("uReadMore", uReadMore);
Vue.component("uRow", uRow);
Vue.component("uRowNotice", uRowNotice);
Vue.component("uSearch", uSearch);
Vue.component("uSection", uSection);
Vue.component("uSelect", uSelect);
Vue.component("uSkeleton", uSkeleton);
Vue.component("uSlider", uSlider);
Vue.component("uSteps", uSteps);
Vue.component("uSticky", uSticky);
Vue.component("uSubsection", uSubsection);
Vue.component("uSwipeAction", uSwipeAction);
Vue.component("uSwiper", uSwiper);
Vue.component("uSwitch", uSwitch);
Vue.component("uTabbar", uTabBar);
Vue.component("uTable", uTable);
Vue.component("uTabs", uTabs);
Vue.component("uTabsSwiper", uTabsSwiper);
Vue.component("uTag", uTag);
Vue.component("uTd", uTd);
Vue.component("uTh", uTh);
Vue.component("uTimeLine", uTimeLine);
Vue.component("uToast", uToast);
Vue.component("uTopTips", uTopTips);
Vue.component("uTr", uTr);
Vue.component("uUpload", uUpload);
Vue.component("uVerificationCode", uVerificationCode);
Vue.component("uWaterfall", uWaterfall);
