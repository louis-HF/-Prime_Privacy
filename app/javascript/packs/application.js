import "bootstrap";

// Todo condition
import Chartkick from "chartkick";
window.Chartkick = Chartkick;

import Chart from "chart.js";
Chartkick.addAdapter(Chart);

import Sortable from 'sortablejs'


// Sensitivity page
document.addEventListener("DOMContentLoaded", function(event) {
  // Draglist
  if (document.getElementById("draglist")) {
    Sortable.create(draglist, {animation: 120, sort: true, touchStartThreshold: 2, scrollSpeed: 5,
      onEnd: function (evt) {
      var itemEl = evt.item;  // dragged HTMLElement
      console.log(evt.to);    // target list
      (evt.from);  // previous list
      (evt.oldIndex);  // element's old index within old parent
      (evt.newIndex);  // element's new index within new parent
      },
    });
  }

  // Prevent ghost drag
  draglist.addEventListener("dragstart", function(e) {
    var crt = this.cloneNode(true);
    crt.style.visibility = "hidden";
    document.body.appendChild(crt);
    e.dataTransfer.setDragImage(crt, 0, 0);
  }, false);

  // New topic form management (hide-show)
  $("#add-topic-btn").click(function(){
      $("#mainform-topic").toggle("hidden");
      $("#subform-topic").toggle("hidden");
  });

  $("#confirm-topic-btn").click(function(){
      $("#mainform-topic").toggle("hidden");
      $("#subform-topic").toggle("hidden");
  });

  // Btn behaviour
  document.getElementById("add-topic-btn").addEventListener("click", function(event){
      event.preventDefault();
      var topic_name = document.getElementById('topic-name').value;
      document.getElementById('topic-name-reminder').innerHTML += topic_name;
  });

  document.getElementById("add-another-word").addEventListener("click", function(event){
      event.preventDefault();
      var word_list = '<input class="input-box word-input" type="text" name="topic-name" value="Word" >';
      document.getElementById('words-wrapper').innerHTML += word_list;
  });

  // Input new topic in draglist
  document.getElementById("confirm-topic-btn").addEventListener("click", function(event){
      // var new_topic = document.getElementById('topic-name').value;
      // // Rajouter un create avec le controller pour que ça marche et recharger la page
      // var new_topic_box = '<li class="draglist-box"> <p class="rank">8</p> <%= image_tag "personal.png", class: "picto personal hidden-xs" %> <p class="topic-name"> ${new_topic} </p> <% if user_signed_in? %> <a href=""> <i class="far fa-edit edit"></i> </a> <% end %> <a href=""> <i class="far fa-times-circle delete-cross"></i> </a> <i class="fas fa-arrows-alt-v drag"></i> </li>';
      // document.getElementById('draglist').innerHTML += new_topic_box;
  });

  // Inputs empty out when typing
  document.getElementById("topic-name").addEventListener("click", function(event){
      document.getElementById('topic-name').value = '';
  });
});

jQuery(document).ready(function(){
  jQuery(".word-input").focus(function(){
    if(jQuery(this).val() === 'Word'){
      jQuery(this).val('');
    }
  });
  jQuery(".word-input").blur(function(){
    if(jQuery(this).val() === ''){
      jQuery(this).val('Word');
    }
  });
});


// Devise alert automatic remove
window.setTimeout(function() {
    $(".alert-dismissible").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove();
    });
}, 3000);

