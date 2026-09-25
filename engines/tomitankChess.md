# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2535<sub>(+48) | 2851<sub>(+31) | 2915<sub>(+27) |  |
| 6.0 | 2026-03-31 | 2487<sub>(+93) | 2820<sub>(+94) | 2888<sub>(+75) |  |
| 5.3 | 2025-09-26 | 2394 | 2726 | 2813 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-25 04:43:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2394, 2487, 2535]
  line "STC (8.0+0.08s)" [2394, 2487, 2535]
  line "LTC (60.0+0.60s)" [2726, 2820, 2851]
  line "" [2813, 2888, 2915]
  line "VLTC (2m24s+1.12s)" [2813, 2888, 2915]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2915 | 27 | 408 | 52% | 2903 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2851 | 27 | 402 | 51% | 2844 | 45% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2535 | 30 | 384 | 48% | 2553 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2888 | 27 | 406 | 50% | 2888 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2820 | 29 | 362 | 50% | 2817 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2487 | 26 | 476 | 48% | 2506 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2813 | 31 | 312 | 48% | 2831 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2726 | 32 | 310 | 52% | 2709 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2394 | 29 | 420 | 50% | 2391 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |