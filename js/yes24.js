// --------------------회원/비회원 탭--------------------------------
// 회원 
const member = document.querySelector('#ultabmem>#limem>.member') // 회원
let members = document.querySelectorAll('main .mem_loginform, main .login_social') // 회원 하위내역
member.style.display = 'block' // 초기 설정

// 비회원
const non_member = document.querySelector('#ultabmem>#linomem>.member'); // 비회원
let non_members = document.querySelector('main .sec3') // 비회원 하위내역
non_members.style.display = 'none' // 초기설정

// 비회원 주문확인을 눌렀을때 
non_member.addEventListener('click', () => {

    if (member.style.display == 'block') {
  
      non_members.style.display = 'block'
      member.style.visibility = 'visible'
  
      members.forEach((element) => {
        element.style.display = 'none'
        member_style(element)
      });
    }
})
  
// 회원을 눌렀을때 
member.addEventListener('click', () => {
  
    if (member.style.visibility = 'visible') {
  
      member.style.display = 'block'
  
      non_member.style.visibility = 'visible'
      non_members.style.display = 'none'
  
      members.forEach((element) => {
        element.style.display = 'block'
        non_member_style(element)
      });
    }
})
// CSS
function member_style(element) {
    member.style.color = 'black'
    member.style.border = '1px solid lightgray'
    member.style.borderBottom = '1px solid #6699cc'
    member.style.backgroundColor = '#f8f8f8'
  
    non_member.style.color = '#6699cc'
    non_member.style.border = '1px solid #6699cc'
    non_member.style.borderBottom = '1px solid white'
    non_member.style.backgroundColor = 'white'
  }
  
  function non_member_style(element) {
    non_member.style.color = 'black'
    non_member.style.border = '1px solid lightgray'
    non_member.style.borderBottom = '1px solid #6699cc'
    non_member.style.backgroundColor = '#f8f8f8'
  
    member.style.color = '#6699cc'
    member.style.border = '1px solid #6699cc'
    member.style.borderBottom = '1px solid white'
    member.style.backgroundColor = 'white'
  }

// ---------------------------------------------------------------

// --------------------SNS로그인--------------------------------
//네이버로 로그인
function open1() {
  window.open(
    'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=SgGm0LkEvt0x83ZeP1z5&redirect_uri=https%3a%2f%2fwww.yes24.com%2fPartnerSSO%2fNaverLogin.aspx&state=0xBC33EA4E26E5E1AF1408321416956113A4658763',
    '_blank',
    'width=500, height=500'
  );
}
//카카오로 로그인
function open2() {
  window.open(
    'https://kauth.kakao.com/oauth/authorize?redirect_uri=https://www.yes24.com/PartnerSSO/Kakao/KakaoLoginAuth.aspx&client_id=63d93256eaf1111b6ffba93434290e18&response_type=code&state=Login',
    '_blank',
    'width=500, height=500'
  );
}
//페이스북으로 로그인
function open3() {
  window.open(
    'https://www.facebook.com/privacy/consent/gdp/?params%5Bapp_id%5D=390305751390074&params%5Bkid_directed_site%5D=false&params%5Blogger_id%5D=%222db9e6c5-6619-405b-b249-3aee80f7b549%22&params%5Bnext%5D=%22read%22&params%5Bredirect_uri%5D=%22https%3A%5C%2F%5C%2Fwww.yes24.com%5C%2FPartnerSSO%5C%2FFaceBook%5C%2FFaceBookLogin.aspx%22&params%5Bresponse_type%5D=%22code%22&params%5Breturn_scopes%5D=false&params%5Bscope%5D=%5B%22public_profile%22%2C%22email%22%5D&params%5Bsouth_korea_ux%5D=true&params%5Bsteps%5D=%7B%22read%22%3A%5B%22public_profile%22%2C%22email%22%2C%22baseline%22%5D%7D&params%5Btp%5D=%22unspecified%22&params%5Bcui_gk%5D=%22%5BPASS%5D%3A%22&params%5Bis_limited_login_shim%5D=false&source=gdp_delegated',
    '_blank',
    'width=500, height=500'
  );
}
//-------------------------------------------------------------