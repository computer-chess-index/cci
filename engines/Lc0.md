# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2395<sub>(+27) | 2990<sub>(+6) | 3162<sub>(-56) |  |
| 0.29.0 | 2022-12-13 | 2368 | 2984 | 3218 |  |
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

Generated: 2026-08-17 06:26:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2368, 2395]
  line "STC (8.0+0.08s)" [2368, 2395]
  line "LTC (60.0+0.60s)" [2984, 2990]
  line "VLTC (2m24s+1.12s)" [3218, 3162]
  line "VLTC (2m24s+1.12s)" [3218, 3162]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 23 | 516 | 49% | 3173 | 53% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 24 | 526 | 48% | 3004 | 46% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2395 | 22 | 762 | 49% | 2394 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3218 | 28 | 356 | 50% | 3218 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 2984 | 30 | 328 | 48% | 2998 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2368 | 32 | 400 | 42% | 2480 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |