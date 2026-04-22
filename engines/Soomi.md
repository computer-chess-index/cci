# Engine: Soomi

Author: Laukkanen Otto

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Ratings nach Version

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2025-12-31 | 2063<sub>(+203) | 2364<sub>(+180) | 2471<sub>(+237) |  |
| 1.1.8 | 2025-12-16 | 1860<sub>(-8) | 2184<sub>(+48) | 2234<sub>(+44) |  |
| 1.1.7 | 2025-12-07 | 1868<sub>(+54) | 2136<sub>(-48) | 2190<sub>(-9) |  |
| 1.1.6 | 2025-11-30 | 1814 | 2184 | 2199 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Soomi+<version>&body=###%20Engine%20name%0ASoomi%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-04-22 06:27:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1814, 1868, 1860, 2063]
  line "STC (8.0+0.08s)" [1814, 1868, 1860, 2063]
  line "LTC (60.0+0.60s)" [2184, 2136, 2184, 2364]
  line "VLTC (2m24s+1.12s)" [2199, 2190, 2234, 2471]
  line "VLTC (2m24s+1.12s)" [2199, 2190, 2234, 2471]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>
