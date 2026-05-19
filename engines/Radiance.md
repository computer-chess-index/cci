# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1721<sub>(+36) | 2070<sub>(+106) | 2199<sub>(+90) |  |
| 4.3 | 2026-03-25 | 1685<sub>(+91) | 1964<sub>(+104) | 2109<sub>(+201) |  |
| 4.2 | 2026-01-17 | 1594<sub>(+new) | 1860<sub>(+new) | 1908<sub>(+new) |  |
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

Generated: 2026-05-19 06:28:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1594, 1685, 1721]
  line "STC (8.0+0.08s)" [1594, 1685, 1721]
  line "LTC (60.0+0.60s)" [1860, 1964, 2070]
  line "VLTC (2m24s+1.12s)" [1908, 2109, 2199]
  line "VLTC (2m24s+1.12s)" [1908, 2109, 2199]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2199 | 34 | 306 | 49% | 2198 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2070 | 32 | 348 | 51% | 2057 | 24% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1721 | 31 | 374 | 49% | 1728 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2109 | 30 | 412 | 54% | 2068 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1964 | 31 | 362 | 49% | 1975 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1685 | 32 | 360 | 49% | 1693 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1908 | 36 | 304 | 45% | 2001 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1860 | 39 | 246 | 47% | 1917 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1594 | 34 | 328 | 45% | 1671 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |