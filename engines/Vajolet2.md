# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2850<sub>(+31) | 3116<sub>(+77) | 3160<sub>(+41) |  |
| 3.1 | 2026-04-03 | 2819<sub>(+101) | 3039<sub>(+58) | 3119<sub>(+63) |  |
| 3.0 | 2025-12-21 | 2718 | 2981 | 3056 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-07 08:52:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "STC (8.0+0.08s)" [2718, 2819, 2850]
  line "STC (8.0+0.08s)" [2718, 2819, 2850]
  line "LTC (60.0+0.60s)" [2981, 3039, 3116]
  line "VLTC (2m24s+1.12s)" [3056, 3119, 3160]
  line "VLTC (2m24s+1.12s)" [3056, 3119, 3160]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 30 | 318 | 49% | 3171 | 52% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3116 | 29 | 352 | 51% | 3110 | 47% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2850 | 27 | 420 | 50% | 2851 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 29 | 352 | 50% | 3120 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3039 | 27 | 406 | 50% | 3038 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2819 | 28 | 384 | 50% | 2815 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 31 | 318 | 52% | 3039 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2981 | 29 | 344 | 52% | 2961 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2718 | 29 | 386 | 52% | 2687 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |