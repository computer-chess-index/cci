# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1709<sub>(+36) | 2057<sub>(+106) | 2202<sub>(+107) |  |
| 4.3 | 2026-03-25 | 1673<sub>(+91) | 1951<sub>(+104) | 2095<sub>(+201) |  |
| 4.2 | 2026-01-17 | 1582 | 1847 | 1894 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:28:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1582, 1673, 1709]
  line "STC (8.0+0.08s)" [1582, 1673, 1709]
  line "LTC (60.0+0.60s)" [1847, 1951, 2057]
  line "VLTC (2m24s+1.12s)" [1894, 2095, 2202]
  line "VLTC (2m24s+1.12s)" [1894, 2095, 2202]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2202 | 30 | 412 | 50% | 2194 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2057 | 28 | 466 | 50% | 2048 | 22% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1709 | 27 | 522 | 49% | 1712 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2095 | 30 | 412 | 54% | 2055 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1951 | 31 | 362 | 49% | 1962 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1673 | 32 | 360 | 49% | 1681 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1894 | 36 | 304 | 45% | 1986 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1847 | 39 | 246 | 47% | 1904 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1582 | 34 | 328 | 45% | 1661 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |