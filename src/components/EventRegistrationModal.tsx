import { useState } from 'react';
import { X, Calendar, MapPin, Users, Mail, Phone, User } from 'lucide-react';
import './EventRegistrationModal.css';

interface Event {
  title: string;
  date: string;
  type: string;
  location: string;
  time: string;
}

interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

const EventRegistrationModal = ({ isOpen, onClose, event }: EventRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Ici vous pouvez ajouter la logique d'envoi à votre backend
    console.log('Inscription événement:', { event, formData });
    
    setIsSubmitting(false);
    onClose();
    // Réinitialiser le formulaire
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      organization: '',
      message: ''
    });
  };

  if (!isOpen || !event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Inscription à l'événement</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="event-info">
          <h3 className="event-title">{event.title}</h3>
          <div className="event-details">
            <div className="event-detail-item">
              <Calendar size={16} className="detail-icon" />
              <span>{event.date}</span>
            </div>
            <div className="event-detail-item">
              <MapPin size={16} className="detail-icon" />
              <span>{event.location}</span>
            </div>
            <div className="event-detail-item">
              <Users size={16} className="detail-icon" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                <User size={16} />
                Prénom *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Votre prénom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">
                <User size={16} />
                Nom *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Votre nom"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <Mail size={16} />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={16} />
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+243 XXX XXX XXX"
            />
          </div>

          <div className="form-group">
            <label htmlFor="organization">
              <Users size={16} />
              Organisation
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Votre organisation (optionnel)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Informations supplémentaires (optionnel)"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Inscription en cours...' : 'Confirmer l\'inscription'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationModal;
