import React from "react";
import './navigation.css';
import './Home.css';
function FooterSimple() {
  const queryParams = new URLSearchParams(window.location.search);
  const color = queryParams.get('color');
  if (color=='green'){
    var classNam="py-2 fixed-bottom";
    var colour="m-0 text-center footerg";
  }if (color=='red'){
    var classNam="py-2 fixed-bottom gwarp";
    var colour="m-0 text-center footerg";
  }else {
    var classNam="py-2 fixed-bottom gwarp ssse";
    var colour="m-0 text-center footerg";
  };

  return (
    <div className="footer ssse">
      <footer class={classNam}>
        <div class="container">
          <p class={colour}>
          ⠀⠀⠀Copyright  &copy; ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterSimple;