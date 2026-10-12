# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 2730<sub>(+293) | 3060<sub>(+247) | 3154<sub>(+206) |  |
| 2.4.0 | 2026-09-11 | 2437 | 2813 | 2948 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 2979<sub>(+310) | 3363<sub>(+323) | 3384<sub>(+279) |  |
| 2.4.0 | 2026-09-11 | 2669 | 3040 | 3105 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-12 04:41:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0"]
  y-axis "Elo Rating" 2400 --> 3400
  line "E1: STC (8.0+0.08s)" [2437, 2730]
  line "E1: LTC (60.0+0.60s)" [2813, 3060]
  line "E1: VLTC (2m24s+1.12s)" [2948, 3154]
  line "P1: STC (8.0+0.08s)" [2669, 2979]
  line "P1: LTC (60.0+0.60s)" [3040, 3363]
  line "P1: VLTC (2m24s+1.12s)" [3105, 3384]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 85 | 38 | 58% | 3318 | 53% |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 57 | 84 | 57% | 3101 | 57% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 97 | 32 | 56% | 3303 | 44% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3060 | 56 | 90 | 58% | 2997 | 51% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2979 | 92 | 36 | 56% | 2917 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2730 | 60 | 88 | 60% | 2639 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2948 | 29 | 365 | 52% | 2938 | 40% |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 35 | 256 | 53% | 2984 | 40% |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3105 | 39 | 198 | 51% | 3097 | 42% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2813 | 33 | 294 | 47% | 2842 | 39% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2930 | 33 | 292 | 57% | 2861 | 38% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3040 | 42 | 168 | 53% | 3006 | 43% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2614 | 36 | 266 | 52% | 2564 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2669 | 46 | 156 | 46% | 2705 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2437 | 36 | 252 | 41% | 2530 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |