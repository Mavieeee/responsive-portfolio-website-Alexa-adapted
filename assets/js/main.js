// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
  });
});

// contact form simple validation (simulação)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const msg = this.message.value.trim();

    if(!name || !email || !msg){
      alert('Preencha todos os campos!');
      return;
    }
    // validação rápida de email
    if(!email.includes('@') || !email.includes('.')){
      alert('Email inválido!');
      return;
    }

    alert('Mensagem enviada (simulada). Obrigado!');
    this.reset();
  });
}

// set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
