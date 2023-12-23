<template>

  <div class="container">
    <h2>Input Forms</h2>
    <IText label="User"></IText>
    <IEmail></IEmail>
    <IPassword></IPassword>
    <INumber></INumber>
    <IFile></IFile>
    <IDate></IDate>
  </div>
   
  <div>
    <FSelect :options = "fruitOptions" label="select"></FSelect>
    <FTextArea></FTextArea>
    <FCheckbox label="dan"></FCheckbox>
    <FRadiobox v-model="selectedFruit" :items="radioItems"></FRadiobox>
    <FToggles label="Baha"></FToggles>
    <BButtons value="Arab"></BButtons>
    <DButtons :options="dropdownOptions" :description="dropdownDescription"></DButtons>
    <div class="btns">
      <FGroupBtn  :val="status1" :items="items1" @change-status="status1 = $event"></FGroupBtn>
      <span>{{ status1 }}</span>
    </div>
    <div class="btns">
      <FGroupBtn  :val="status2" :items="items2" @change-status="status2 = $event"></FGroupBtn>
      <span>{{ status2 }}</span>
    </div>
    <div class="btns">
      <FGroupBtn :val="status3" :items="items3" @change-status="status3 = $event"></FGroupBtn>
      <span>{{ status3 }}</span>
    </div>
    <FSliders></FSliders>
    <FForms></FForms>
  </div>
 
  <div class="Container">
  <div class="cards">
    <CCard name="Bakhdaulet Baktygaliev" description="The name Bakdaulet is of Kazakh origin and is commonly given to boys. In Kazakh,  Therefore, Bakdaulet can be interpreted to mean " :src="require('@/assets/baxa.jpg')"></CCard>
    <CCard name="Bakhdaulet Baktygaliev" description="The name Bakdaulet is of Kazakh origin and is commonly given to boys. In Kazakh,  Therefore, Bakdaulet can be interpreted to mean " :src="require('@/assets/baxa.jpg')"></CCard>
    <CCard name="Bakhdaulet Baktygaliev" description="The name Bakdaulet is of Kazakh origin and is commonly given to boys. In Kazakh,  Therefore, Bakdaulet can be interpreted to mean " :src="require('@/assets/baxa.jpg')"></CCard>
  </div>

  <ConAccardion :title="accordionTitle" :items="accordionItems"></ConAccardion>
  <div class="collapse">
    <CoCollapse label="idol" title="Bakhdaulet Baktygaliev" content="The name Bakdaulet is of Kazakh origin and is commonly given to boys. In Kazakh,  Therefore, Bakdaulet can be interpreted to mean"></CoCollapse>
  </div>
  </div>

   <div>
    <VLabels labelType="warning"></VLabels>
  <ContProggresbar :percentage="80 "></ContProggresbar>
  </div>
   
  <ConTollip content="This is a tooltip">
    <BButtons value="BigBoy"></BButtons>
  </ConTollip>
  <div class="d">
  <ConMessageBox 
      :message-content="messageContent"
      :button-label="buttonLabel"></ConMessageBox>
    </div>
  <div>
  <ModalWindow :title="modalTitle" :content="modalContent"></ModalWindow>
  </div>

  <ConAlert :type="type" :message="message"></ConAlert>
  <ConIcons></ConIcons>
  <ImgCarousel></ImgCarousel>
  <ConTable :headers="tableHeaders" :data="tableData"></ConTable>


  <div class="f">
  <SearchBar></SearchBar>
  <NavBreCrumb :items="navItems"></NavBreCrumb>
  <NavPagination :min="1" :max="16"></NavPagination>
  </div>


  <NavListGroups :title="basicTitle" :items="basicItems"></NavListGroups>
  <NavNavbar :items="navBarItems" :isMobile="true" :logoText="'My Logo'"></NavNavbar>

  <LoadingSpinner ></LoadingSpinner>
  
  <div class="d">
    <ConDivider></ConDivider>
  </div>
  
    <VBadget badgeColor="green"> 
      <template v-slot:elmnt>
      <VImage class="elmnt" :src="require('@/assets/more.png')" alt="menu"></VImage>
      </template>
    </VBadget>


</template>

<script>
import IText from './components/Forms/Input/IText.vue'
import IEmail from './components/Forms/Input/IEmail.vue'
import IPassword from './components/Forms/Input/IPassword.vue'
import INumber from './components/Forms/Input/INumber.vue'
import IFile from './components/Forms/Input/IFile.vue'
import IDate from './components/Forms/Input/IDate.vue'
import FSelect from './components/Forms/FSelect.vue'
import FTextArea from './components/Forms/FTextArea.vue'
import FCheckbox from './components/Forms/FCheckbox.vue'
import FRadiobox from './components/Forms/FRadiobox.vue'
import FToggles from './components/Forms/FToggles.vue'
import BButtons from './components/Forms/Buttons/BButtons.vue'
import DButtons from './components/Forms/Buttons/DButtons.vue'
import FGroupBtn from './components/Forms/FGroupBtn.vue'
import FSliders from './components/Forms/FSliders.vue'
import FForms from './components/Forms/FForms.vue'

import CCard from './components/Containsers/CCard.vue'
import ConAccardion from './components/Containsers/ConAccardion.vue'
import CoCollapse from './components/Containsers/CoCollapse.vue'

import VLabels from './components/Content/VLabels.vue'
import ConIcons from './components/Content/ConIcons.vue'

import ContProggresbar from './components/Content/ContProggresbar.vue'
import ConTollip from './components/Content/ConTollip.vue'
import ConMessageBox from './components/Content/ConMessageBox.vue'
import ModalWindow from './components/Content/ModalWindow.vue'
import ConAlert from './components/Content/ConAlert.vue'
import ImgCarousel from './components/Content/ImgCarousel.vue'
import ConTable from './components/Content/ConTable.vue'

import SearchBar from './components/Navigation/SearchBar.vue'
import NavBreCrumb from './components/Navigation/NavBreCrumb.vue'
import NavPagination from './components/Navigation/NavPagination.vue'
import NavListGroups from './components/Navigation/NavListGroups.vue'
import NavNavbar from './components/Navigation/NavNavbar.vue'




import LoadingSpinner from './components/Others/LoadingSpinner.vue'
import ConDivider from './components/Others/ConDivider.vue'
import VImage from './components/Others/VImage.vue'





export default {
  name: 'App',
  components:{
    IText,
    IEmail,
    IPassword,
    INumber,
    IFile,
    IDate,
    FSelect,
    FTextArea,
    FCheckbox,
    FRadiobox,
    FToggles,
    BButtons,
    DButtons,
    FGroupBtn,
    FSliders,
    FForms,
    CCard,
    ContProggresbar,
    ConTollip,
    VLabels,
    ConIcons,


    ConMessageBox,
    ModalWindow,
    ConAlert,
    ImgCarousel,
    ConTable,
    ConAccardion,
    CoCollapse,
    NavBreCrumb,
    NavPagination,
    NavListGroups,
    NavNavbar,
    LoadingSpinner,
    ConDivider,
    VImage,
    SearchBar,
},
data(){
    return{
      messageContent: 'Your message content',
      buttonLabel: 'Message',
      fruitOptions: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
      ],
      radioItems: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
      selectedFruit: null,
      errorMessage: 'Please select an option.',
      errorVisible: false,
      modalTitle: 'Custom Title',
      modalContent: 'Custom Content',
      type: 'success',
      message: 'Hello User',
      tableHeaders: ["№", "Name", "Surname"],
      tableData: [
        [1, "John", "Doe"],
        [2, "Jane", "Doe"],
        [3, "Alice", "Smith"],
        [4, "Bob", "Johnson"],
        [5, "Eve", "Brown"],
      ],
      dropdownOptions: ["Option 1", "Option 2", "Option 3", "Option 4"],
      dropdownDescription: "Choose an option",
      status1: 0,
      status2: 1,
      status3: 1,
      items1: [
        {
          status: 0,
          title: "Pending",
          class: "btn-default",
        },
        {
          status: 1,
          title: "Verify",
          class: "btn-success",
        },
        {
          status: 2,
          title: "Decline",
          class: "btn-danger",
        },
      ],
      items2: [
        {
          status: 0,
          title: "Disabled",
          class: "btn-default",
        },
        {
          status: 1,
          title: "Enabled",
          class: "btn-success",
        },
      ],
      items3: [
        {
          status: 0,
          title: "No",
          class: "btn-default",
        },
        {
          status: 1,
          title: "Yes",
          class: "btn-info",
        },
      ],
      accordionTitle: 'My Accordion',
      accordionItems: [
        { name: 'Item 1', content: 'Lorem ipsum for Item 1' },
        { name: 'Item 2', content: 'Lorem ipsum for Item 2' },
        { name: 'Item 3', content: 'Lorem ipsum for Item 3' },
      ],

       navItems : [{
        title: 'Home',
        href: '#',},
      {
        title: 'Pictures',
        href: '#',
      },
      {
        title: 'Summer 15',
        href: '#',
      },
      {
        title: 'Italy',
        href: '#',
        isActive: true,
      },
      ],

      basicTitle: 'List Group',
      basicItems: [
        { label: 'Item 1', link: '#1' },
        { label: 'Item 2', link: '#2' },
        { label: 'Item 3', link: '#3' },
        { label: 'Item 4', link: '#4' },
      ],

      navBarItems: [
        { label: 'Home', link: '#' },
        { label: 'About', link: '#' },
        { label: 'Category', link: '#' },
        { label: 'Menu', link: '#' },
        { label: 'Contact', link: '#' },
      ],

      tabItems: [
        { label: "Home Decor", content: "Browse through our list of Home Decor Items" },
        { label: "Furniture", content: "Flash Sale on Living Room and Bedroom Furniture" },
        { label: "Kitchen", content: "Bring the best out of the masterchef in you!!" },
        { label: "Clearance", content: "Red hot deals at affordable prices. Check out our clearance section for more details." },
      ],
      isLoading: true,
    };
    },
    methods: {
    toggleAccordionItem(index) {
      this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
    },
  },
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
.cards{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
.d{
  margin :20px;
}
.f{
  width: 100px;
}
.container{
  margin: 20px;
}
.btns{
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
}

</style>
