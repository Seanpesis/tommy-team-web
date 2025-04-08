import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Fade,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SecurityIcon from '@mui/icons-material/Security';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// Define the type for gallery items
interface GalleryItemType {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

const About = () => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      icon: <ElectricCarIcon sx={{ fontSize: 40 }} />,
      title: 'עמדות טעינה לרכב חשמלי',
      items: [
        'התקנת עמדות טעינה ביתיות וחכמות לרכבים חשמליים',
        'פתרונות טעינה חכמים לבניינים משותפים וחניונים פרטיים',
        'ליווי מול חברות האנרגיה והסדרת התקנות על פי חוק',
      ],
    },
    {
      icon: <HomeIcon sx={{ fontSize: 40 }} />,
      title: 'חשמל בבתים פרטיים',
      items: [
        'תכנון והקמה של מערכות חשמל חדשות',
        'שדרוג לוחות חשמל ובדיקות תקינות',
        'פתרונות חשמל חכם (בית חכם, תאורה חכמה, חיישנים)',
        'ליווי אדריכלי ושיתוף פעולה עם קבלנים ויזמים',
      ],
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: 'פתרונות למתחמים עסקיים וציבוריים',
      items: [
        'תשתיות חשמל מתקדמות למשרדים, חנויות וחללים מסחריים',
        'מערכות גיבוי ואבטחת זרם (UPS)',
        'הכנה לאישורים מול מכון התקנים וחברות הביטוח',
      ],
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      title: 'תיקון תקלות ושירות חירום',
      items: [
        'מענה מהיר ומקצועי לכל תקלה חשמלית',
        'שירות חירום בזמינות גבוהה',
        'פתרונות בטיחות מיידיים לבתים ועסקים',
      ],
    },
  ];

  const advantages = [
    'שירות מקצועי בגובה העיניים',
    'ניסיון של שנים בתחום החשמל והאנרגיה',
    'התאמה אישית לצרכי הלקוח',
    'שימוש בציוד המתקדם והאיכותי ביותר',
    'ליווי מלא – מהתכנון ועד הביצוע',
  ];

  const galleryItems: GalleryItemType[] = [
    {
      id: 1,
      title: 'התקנת עמדת טעינה לרכב חשמלי',
      description: 'התקנת עמדת טעינה חכמה בבית פרטי עם מערכת ניהול חכם',
      image: '/project6.jpg',
      type: 'image',
    },
    {
      id: 2,
      title: 'עמדת טעינה ',
      description: 'התקנת עמדת טעינה עם שליטה מלאה ובאחריות',
      image: '/project5.png',
      type: 'image',
    },
    {
      id: 3,
      title: 'פרויקט מסחרי',
      description: 'תשתיות חשמל מתקדמות למרכז מסחרי חדש',
      image: '/project4.jpg',
      type: 'image',
    },
    {
      id: 4,
      title: 'אתגר ההתקנה',
      description: 'בטומי טים אלקטריק אין צורך לאתגר אותנו במיקום ההתקנה, אנו נתקין עבורכם היכן שתבקשו , תסמכו עלינו.',
      image: '/project1-pic.png',
      type: 'video',
      videoUrl: '/project1.mp4',
    },
    {
      id: 5,
      title: 'דואגים מהגשם?',
      description:'אין צורך לדאוג מהגשם, אנו מספקים פתרונות מומחיים בכל מקום וזמן',
      image: '/project2-pic.png',
      type: 'video',
      videoUrl: '/project2.mp4',
    },
    {
      id: 6,
      title: 'עוד לקוח מרוצה',
      description: 'כבר בשנות ה-80 הבינו מה יהיה נחוץ בעתיד',
      image: '/project3-pic.png',
      type: 'video',
      videoUrl: '/project3.mp4',
    },
  ];

  const handleItemClick = (item: GalleryItemType) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Fade in timeout={1000}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: 'primary.main',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                },
              }}
            >
              מי אנחנו
            </Typography>
          </Fade>
          <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              Tommy Team Electric היא חברה מובילה בתחום החשמל והאנרגיה, המספקת פתרונות מקצועיים ואיכותיים
              ללקוחותיה. אנו מתמחים בהתקנת עמדות טעינה לרכבים חשמליים, מערכות חשמל חכמות ופתרונות
              מתקדמים למגזר הפרטי והעסקי.
            </Typography>
          </Fade>
        </Box>

        {/* Company Story */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000} style={{ transitionDelay: '400ms' }}>
                <Box
                  component="img"
                  src="/company-story.jpg"
                  alt="Company Story"
                  sx={{
                    width: '85%',
                    maxWidth: 400,
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease-in-out',
                    display: 'block',
                    mx: 'auto',
                    border: '4px solid',
                    borderColor: 'background.paper',
                    '&:hover': {
                      transform: 'scale(1.03) translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                    },
                  }}
                />
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000} style={{ transitionDelay: '600ms' }}>
                <Box>
                  <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
                    הסיפור שלנו
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}
                  >
                    Tommy Team Electric נוסדה מתוך חזון להביא את המהפכה החשמלית לישראל. אנו מתמחים בהתקנת
                    עמדות טעינה לרכבים חשמליים, מערכות חשמל חכמות ופתרונות מתקדמים למגזר הפרטי והעסקי.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}
                  >
                    הצוות שלנו מורכב מאנשי מקצוע מובילים בתחומם, המחויבים לספק את הפתרונות המתקדמים
                    ביותר בתחום החשמל והאנרגיה. אנו מאמינים באיכות, מקצועיות ושירות מעולה.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Box>

        {/* Services Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            תחומי התמחות
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        color: 'primary.main',
                      }}
                    >
                      {service.icon}
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{ mr: 2, fontWeight: 600 }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <List>
                      {service.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex} sx={{ py: 1 }}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Advantages Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            למה לבחור בנו?
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {advantages.map((advantage, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <StarIcon color="primary" sx={{ fontSize: 32, mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {advantage}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projects Gallery Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            קצת מהפרויקטים שלנו
          </Typography>
          <Grid container spacing={4}>
            {galleryItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Fade in timeout={1000}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                    onClick={() => handleItemClick(item)}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt={item.title}
                        sx={{ 
                          objectFit: 'cover',
                          objectPosition: item.image.includes('project5.png') || item.image.includes('project6.jpg')
                            ? 'top center' 
                            : item.image.includes('project2-pic') || item.image.includes('project3-pic')
                              ? 'top center' 
                              : 'center',
                          bgcolor: 'black',
                        }}
                      />
                      {item.type === 'video' && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'rgba(0, 0, 0, 0.3)',
                          }}
                        >
                          <PlayCircleOutlineIcon
                            sx={{
                              fontSize: 60,
                              color: 'white',
                              opacity: 0.8,
                              transition: 'opacity 0.3s ease-in-out',
                              '&:hover': {
                                opacity: 1,
                              },
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h3">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 8,
            borderRadius: 4,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
              backgroundSize: '30px 30px',
              opacity: 0.1,
            },
          }}
        >
          <Container maxWidth="md">
            <Fade in timeout={1000}>
              <Box>
                <Typography variant="h3" component="h2" sx={{ mb: 4, fontWeight: 700 }}>
                  המשימה שלנו
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: 1.8,
                    opacity: 0.9,
                  }}
                >
                  לספק פתרונות חשמל מתקדמים ואיכותיים, תוך שמירה על סטנדרטים גבוהים של איכות,
                  בטיחות וחדשנות. אנו שואפים להיות השותף האמין והמוביל בתחום החשמל והאנרגיה בישראל.
                </Typography>
              </Box>
            </Fade>
          </Container>
        </Box>

        {/* Dialog for displaying images and videos */}
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          fullScreen={isMobile}
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedItem && (
              <Box sx={{ width: '100%', height: '100%' }}>
                {selectedItem.type === 'image' ? (
                  <Box
                    component="img"
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '90vh',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '56.25%', // 16:9 aspect ratio
                      width: '100%',
                    }}
                  >
                    <video
                      src={selectedItem.videoUrl}
                      title={selectedItem.title}
                      controls
                      autoPlay
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                )}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    p: 2,
                  }}
                >
                  <Typography variant="h6">{selectedItem.title}</Typography>
                  <Typography variant="body2">{selectedItem.description}</Typography>
                </Box>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default About; 