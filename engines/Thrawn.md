# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-07 | 2881<sub>(+653) | 3183<sub>(+546) | 3268<sub>(+472) |  |
| 3.0 | 2026-05-25 | 2228<sub>(-237) | 2637<sub>(-191) | 2796<sub>(-101) |  |
| 2.2 | 2025-10-08 | 2465 | 2828 | 2897 |  |
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

Generated: 2026-08-24 06:29:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2465, 2228, 2881]
  line "STC (8.0+0.08s)" [2465, 2228, 2881]
  line "LTC (60.0+0.60s)" [2828, 2637, 3183]
  line "VLTC (2m24s+1.12s)" [2897, 2796, 3268]
  line "VLTC (2m24s+1.12s)" [2897, 2796, 3268]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3268 | 28 | 330 | 53% | 3235 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 29 | 320 | 53% | 3159 | 61% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2881 | 29 | 344 | 49% | 2881 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2796 | 44 | 162 | 47% | 2820 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2637 | 45 | 156 | 49% | 2645 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2228 | 52 | 124 | 48% | 2249 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2897 | 24 | 510 | 47% | 2924 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2828 | 27 | 434 | 50% | 2828 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2465 | 25 | 540 | 48% | 2488 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |