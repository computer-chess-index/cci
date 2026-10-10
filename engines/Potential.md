# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2550 | 3004 | 3082 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2819 | 3241 | 3374 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2751<sub>(+523) | 3102<sub>(+617) | 3144<sub>(+536) |  |
| 1.1.0 | 2026-05-16 | 2228<sub>(-317) | 2485<sub>(-380) | 2608<sub>(-346) |  |
| 3.0.0 | 2025-08-28 | 2545 | 2865 | 2954 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Potential+<version>&body=###%20Engine%20name%0APotential%0A%0A###%20Version%0Aunlocked" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:41:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "" [2545, 2228, 2751]
  line "STC (8.0+0.08s)" [2545, 2228, 2751]
  line "LTC (60.0+0.60s)" [2865, 2485, 3102]
  line "" [2954, 2608, 3144]
  line "VLTC (2m24s+1.12s)" [2954, 2608, 3144]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3144 | 28 | 356 | 50% | 3141 | 56% |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 35 | 226 | 51% | 3372 | 52% |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3082 | 34 | 258 | 50% | 3083 | 47% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3102 | 27 | 416 | 52% | 3081 | 47% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3241 | 43 | 152 | 47% | 3266 | 50% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3004 | 32 | 292 | 48% | 3019 | 44% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2751 | 30 | 350 | 51% | 2741 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2819 | 39 | 212 | 49% | 2828 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2550 | 35 | 288 | 43% | 2589 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2608 | 29 | 416 | 48% | 2626 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2485 | 28 | 416 | 50% | 2485 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2228 | 31 | 352 | 49% | 2225 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2954 | 28 | 404 | 49% | 2962 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2865 | 29 | 380 | 49% | 2873 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2545 | 27 | 452 | 49% | 2549 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |