# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2394<sub>(+27) | 2989<sub>(+7) | 3160<sub>(-57) |  |
| 0.29.0 | 2022-12-13 | 2367 | 2982 | 3217 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 07:57:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2367, 2394]
  line "STC (8.0+0.08s)" [2367, 2394]
  line "LTC (60.0+0.60s)" [2982, 2989]
  line "VLTC (2m24s+1.12s)" [3217, 3160]
  line "VLTC (2m24s+1.12s)" [3217, 3160]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 23 | 508 | 49% | 3171 | 53% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 2989 | 24 | 526 | 48% | 3002 | 46% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2394 | 22 | 750 | 49% | 2392 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3217 | 28 | 356 | 50% | 3217 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 30 | 328 | 48% | 2997 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2367 | 32 | 400 | 42% | 2479 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |