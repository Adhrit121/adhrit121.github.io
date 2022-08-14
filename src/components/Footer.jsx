import React from "react";
import './navigation.css';
function FooterSimple() {
  const queryParams = new URLSearchParams(window.location.search);
  const color = queryParams.get('color');
  if (color=='green'){
    var classNam="py-2 bg-info fixed-bottom ";
    var colour="m-0 text-center footerg bg-info";
  }if (color=='red'){
    var classNam="py-2 bg-info fixed-bottom ";
    var colour="m-0 text-center footerg bg-info";
  }else {
    var classNam="py-2 bg-info fixed-bottom ";
    var colour="m-0 text-center footerg bg-info";
  };

  return (
    <div className="footer">
      <footer class={classNam}>
        <div class="container">
          <p class={colour}>
            Copyright  &copy; ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterSimple;