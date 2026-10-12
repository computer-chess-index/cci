# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2450 | 2803 | 2853 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2610 | 2948 | 3001 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2537<sub>(+49) | 2853<sub>(+31) | 2916<sub>(+27) |  |
| 6.0 | 2026-03-31 | 2488<sub>(+93) | 2822<sub>(+95) | 2889<sub>(+74) |  |
| 5.3 | 2025-09-26 | 2395 | 2727 | 2815 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-12 04:43:41

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "T1: STC (8.0+0.08s)" [2395, 2488, 2537]
  line "T1: LTC (60.0+0.60s)" [2727, 2822, 2853]
  line "T1: VLTC (2m24s+1.12s)" [2815, 2889, 2916]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2853 | 33 | 276 | 49% | 2863 | 45% |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 27 | 412 | 51% | 2904 | 45% |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3001 | 38 | 212 | 47% | 3029 | 46% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2853 | 27 | 406 | 51% | 2847 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2948 | 43 | 166 | 48% | 2965 | 37% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2803 | 35 | 254 | 52% | 2792 | 40% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2537 | 29 | 388 | 48% | 2554 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2610 | 43 | 174 | 49% | 2614 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2450 | 34 | 284 | 48% | 2476 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2889 | 27 | 406 | 50% | 2890 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2822 | 29 | 362 | 50% | 2819 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2488 | 26 | 476 | 48% | 2507 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2815 | 31 | 312 | 48% | 2832 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2727 | 32 | 310 | 52% | 2711 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2395 | 29 | 420 | 50% | 2392 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |