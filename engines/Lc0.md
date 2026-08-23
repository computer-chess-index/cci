# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2402<sub>(+27) | 2997<sub>(+5) | 3171<sub>(-56) |  |
| 0.29.0 | 2022-12-13 | 2375 | 2992 | 3227 |  |
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

Generated: 2026-08-23 06:26:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2375, 2402]
  line "STC (8.0+0.08s)" [2375, 2402]
  line "LTC (60.0+0.60s)" [2992, 2997]
  line "VLTC (2m24s+1.12s)" [3227, 3171]
  line "VLTC (2m24s+1.12s)" [3227, 3171]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3171 | 23 | 524 | 49% | 3181 | 53% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 2997 | 24 | 530 | 48% | 3012 | 45% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2402 | 21 | 770 | 49% | 2400 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3227 | 28 | 356 | 50% | 3227 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 2992 | 30 | 328 | 48% | 3006 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2375 | 32 | 400 | 42% | 2488 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |