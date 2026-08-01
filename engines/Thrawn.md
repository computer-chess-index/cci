# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-07 | 2881<sub>(+662) | 3164<sub>(+534) | 3248<sub>(+458) |  |
| 3.0 | 2026-05-25 | 2219<sub>(-241) | 2630<sub>(-192) | 2790<sub>(-102) |  |
| 2.2 | 2025-10-08 | 2460<sub>(+new) | 2822<sub>(+new) | 2892<sub>(+new) |  |
| 2.1 | 2024-07-16 |  |  |  |  |
| 2.0 | 2024-01-01 |  |  |  |  |
| 1.1 | 2023-12-28 |  |  |  |  |
| 1.0 | 2023-12-27 |  |  |  |  |
| 0.6-beta | 2023-12-26 |  |  |  |  |
| 0.5-beta | 2023-12-24 |  |  |  |  |
| 0.4-beta | 2023-12-24 |  |  |  |  |
| 0.3-beta | 2023-12-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-01 06:31:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2460, 2219, 2881]
  line "STC (8.0+0.08s)" [2460, 2219, 2881]
  line "LTC (60.0+0.60s)" [2822, 2630, 3164]
  line "VLTC (2m24s+1.12s)" [2892, 2790, 3248]
  line "VLTC (2m24s+1.12s)" [2892, 2790, 3248]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 33 | 238 | 53% | 3214 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3164 | 34 | 224 | 53% | 3137 | 63% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2881 | 33 | 280 | 51% | 2862 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2790 | 44 | 162 | 47% | 2815 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2630 | 45 | 156 | 49% | 2638 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2219 | 52 | 124 | 48% | 2241 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2892 | 24 | 510 | 47% | 2919 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2822 | 27 | 434 | 50% | 2823 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2460 | 25 | 540 | 48% | 2481 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |