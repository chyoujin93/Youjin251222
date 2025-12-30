document.addEventListener('DOMContentLoaded', function() {
    
    // =======================================================
    // 1. JS 이벤트: 회원가입 (비밀번호 일치 및 유효성 검사)
    //    * 수정 내용: 성공 시 'index.html'로 이동하는 코드를 활성화함.
    // =======================================================
    const signupForm = document.getElementById('signup-form');
    
    // 함수: 비밀번호 일치 여부 확인 (onblur 이벤트용)
    window.checkPasswordMatch = function() {
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const errorDisplay = document.getElementById('password-match-error');

        // 이전에 초록색이었을 수 있으므로 색상 초기화
        errorDisplay.style.color = "red"; 

        if (confirmPassword === "") {
            errorDisplay.textContent = "";
        } else if (password !== confirmPassword) {
            errorDisplay.textContent = "비밀번호가 일치하지 않습니다.";
        } else {
            errorDisplay.textContent = "비밀번호가 일치합니다.";
            errorDisplay.style.color = "green";
        }
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 폼 제출 막기
            
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            // 최종 유효성 검사
            if (password !== confirmPassword) {
                alert("회원가입 실패: 비밀번호 확인 값이 일치하지 않습니다.");
                return;
            }
            if (password.length < 8) {
                alert("회원가입 실패: 비밀번호는 8자 이상이어야 합니다.");
                return;
            }
            if (!document.getElementById('terms').checked) {
                alert("회원가입 실패: 이용 약관 및 개인정보 처리 방침에 동의해야 합니다.");
                return;
            }

            // 모든 검사 통과 시
            alert("회원가입 및 로그인 성공! 메인 페이지로 이동합니다.");
            
            // ⭐⭐⭐ 문제 해결 핵심: 메인 페이지로 이동 ⭐⭐⭐
            location.href = 'index.html'; 
            // ===================================================
        });
    }

    // =======================================================
    // 2. JS 이벤트: 로그인 (빈 값 검사 및 처리)
    //    * 수정 내용: 성공 시 'index.html'로 이동하는 코드를 활성화함.
    // =======================================================
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 폼 제출 막기

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (email === "" || password === "") {
                alert("로그인 실패: 이메일과 비밀번호를 모두 입력해 주세요.");
                return;
            }
            
            // 로그인 성공 가정
            alert(`로그인 성공! 메인 페이지로 이동합니다.`);
            
            // ⭐⭐⭐ 로그인 성공 시 메인 페이지로 이동 ⭐⭐⭐
            location.href = 'index.html'; 
            // ===================================================
        });
    }

    // =======================================================
    // 3. JS 이벤트: 메인 화면 (메뉴 클릭 시 본문 내용 변경)
    // =======================================================
    const menuLinks = document.querySelectorAll('.main-menu');
    const contentDisplay = document.getElementById('main-content-display');

    if (menuLinks.length > 0 && contentDisplay) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // 링크 이동 방지
                
                const menuText = event.target.textContent; // 클릭된 메뉴 텍스트 (예: '메뉴 1')
                
                // 본문 내용 업데이트
                contentDisplay.innerHTML = `<p style="color: blue; font-weight: bold;">[${menuText}]가 선택되었습니다.</p> 
                                            <p>선택된 메뉴에 해당하는 상세 정보나 콘텐츠를 여기에 표시할 수 있습니다.</p>`;
            });
        });
    }
});