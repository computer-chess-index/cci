# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1752<sub>(+54) | 2117<sub>(+126) | 2261<sub>(+120) |  |
| 4.3 | 2026-03-25 | 1698<sub>(+94) | 1991<sub>(+110) | 2141<sub>(+209) |  |
| 4.2 | 2026-01-17 | 1604<sub>(+new) | 1881<sub>(+new) | 1932<sub>(+new) |  |
| 4.1 | 2025-08-16 |  |  |  |  |
| 4.0.1 | 2025-04-17 |  |  |  |  |
| 4.0 | 2025-04-16 |  |  |  |  |
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

Generated: 2026-05-05 06:27:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1600 --> 2300
  line "STC (8.0+0.08s)" [1604, 1698, 1752]
  line "STC (8.0+0.08s)" [1604, 1698, 1752]
  line "LTC (60.0+0.60s)" [1881, 1991, 2117]
  line "VLTC (2m24s+1.12s)" [1932, 2141, 2261]
  line "VLTC (2m24s+1.12s)" [1932, 2141, 2261]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 39 | 234 | 51% | 2250 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2117 | 36 | 270 | 51% | 2101 | 25% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1752 | 35 | 298 | 51% | 1744 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2141 | 30 | 412 | 54% | 2099 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1991 | 31 | 362 | 49% | 2002 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1698 | 32 | 360 | 49% | 1706 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1932 | 36 | 304 | 45% | 2025 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1881 | 39 | 246 | 47% | 1937 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1604 | 34 | 328 | 45% | 1682 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |