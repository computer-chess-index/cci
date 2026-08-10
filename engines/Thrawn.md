# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-07 | 2874<sub>(+653) | 3174<sub>(+543) | 3259<sub>(+469) |  |
| 3.0 | 2026-05-25 | 2221<sub>(-239) | 2631<sub>(-191) | 2790<sub>(-102) |  |
| 2.2 | 2025-10-08 | 2460 | 2822 | 2892 |  |
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

Generated: 2026-08-10 07:54:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2460, 2221, 2874]
  line "STC (8.0+0.08s)" [2460, 2221, 2874]
  line "LTC (60.0+0.60s)" [2822, 2631, 3174]
  line "VLTC (2m24s+1.12s)" [2892, 2790, 3259]
  line "VLTC (2m24s+1.12s)" [2892, 2790, 3259]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 29 | 314 | 53% | 3227 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3174 | 31 | 280 | 53% | 3147 | 63% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2874 | 30 | 332 | 49% | 2876 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2790 | 44 | 162 | 47% | 2815 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2631 | 45 | 156 | 49% | 2639 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2221 | 52 | 124 | 48% | 2242 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2892 | 24 | 510 | 47% | 2919 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2822 | 27 | 434 | 50% | 2823 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2460 | 25 | 540 | 48% | 2481 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |