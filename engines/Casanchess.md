# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-15 | 2446<sub>(+104) | 2774<sub>(+148) | 2828<sub>(+93) |  |
| 1.0 | 2026-07-14 | 2342 | 2626 | 2735 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Casanchess+<version>&body=###%20Engine%20name%0ACasanchess%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 06:23:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2342, 2446]
  line "STC (8.0+0.08s)" [2342, 2446]
  line "LTC (60.0+0.60s)" [2626, 2774]
  line "" [2735, 2828]
  line "VLTC (2m24s+1.12s)" [2735, 2828]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2828 | 34 | 248 | 51% | 2822 | 48% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2774 | 32 | 276 | 51% | 2762 | 48% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2446 | 30 | 332 | 48% | 2460 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2735 | 32 | 326 | 60% | 2499 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2626 | 32 | 338 | 58% | 2462 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2342 | 32 | 352 | 62% | 2102 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |