# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2646 | 2917 | 3056 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2809 | 3171 | 3232 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2842<sub>(+72) | 3139<sub>(+104) | 3235<sub>(+122) |  |
| 1.5 | 2026-01-22 | 2770<sub>(+110) | 3035<sub>(+108) | 3113<sub>(+146) |  |
| 1.4 | 2025-11-11 | 2660 | 2927 | 2967 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Yakka+<version>&body=###%20Engine%20name%0AYakka%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 10:07:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 2600 --> 3300
  line "" [2660, 2770, 2842]
  line "T1: STC (8.0+0.08s)" [2660, 2770, 2842]
  line "T1: LTC (60.0+0.60s)" [2927, 3035, 3139]
  line "" [2967, 3113, 3235]
  line "T1: VLTC (2m24s+1.12s)" [2967, 3113, 3235]
  line "" [2660, 2770,2646]
  line "E1: STC (8.0+0.08s)" [2660, 2770,2646]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 35 | 224 | 47% | 3255 | 58% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3139 | 36 | 214 | 51% | 3128 | 58% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2842 | 41 | 168 | 52% | 2826 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3232 | 49 | 120 | 54% | 3140 | 53% |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 37 | 224 | 57% | 2947 | 48% |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3113 | 22 | 592 | 49% | 3123 | 56% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2917 | 41 | 176 | 54% | 2840 | 47% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3035 | 24 | 466 | 48% | 3051 | 54% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3171 | 46 | 146 | 46% | 3214 | 45% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2646 | 41 | 194 | 45% | 2697 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2770 | 22 | 630 | 50% | 2766 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2809 | 47 | 132 | 48% | 2826 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2967 | 34 | 260 | 52% | 2950 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2927 | 30 | 336 | 56% | 2869 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2660 | 36 | 264 | 53% | 2622 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |