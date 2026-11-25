# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2854<sub>(+147) | 3135<sub>(+146) | 3208<sub>(+69) |  |
| 1.5 | 2026-01-22 | 2707 | 2989 | 3139 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2831<sub>(+153) | 3147<sub>(+120) | 3224<sub>(+138) |  |
| 1.5 | 2026-01-22 | 2678 | 3027 | 3086 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-25 05:44:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.6"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2707, 2854]
  line "E1: LTC (60.0+0.60s)" [2989, 3135]
  line "E1: VLTC (2m24s+1.12s)" [3139, 3208]
  line "P1: STC (8.0+0.08s)" [2678, 2831]
  line "P1: LTC (60.0+0.60s)" [3027, 3147]
  line "P1: VLTC (2m24s+1.12s)" [3086, 3224]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 2600 --> 3300
  line "T1: STC (8.0+0.08s)" [2660, 2770, 2842]
  line "T1: LTC (60.0+0.60s)" [2927, 3035, 3139]
  line "T1: VLTC (2m24s+1.12s)" [2967, 3113, 3235]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3235 | 35 | 224 | 47% | 3255 | 58% |
|  |  | P1 | 3224 | 37 | 200 | 50% | 3221 | 59% |
|  |  | E1 | 3208 | 28 | 350 | 49% | 3220 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3139 | 36 | 214 | 51% | 3128 | 58% |
|  |  | P1 | 3147 | 38 | 186 | 51% | 3141 | 56% |
|  |  | E1 | 3135 | 27 | 390 | 48% | 3151 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2842 | 41 | 168 | 52% | 2826 | 51% |
|  |  | P1 | 2831 | 34 | 260 | 51% | 2799 | 46% |
|  |  | E1 | 2854 | 27 | 408 | 52% | 2842 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3139 | 32 | 310 | 57% | 3046 | 47% |
|  |  | T1 | 3113 | 22 | 592 | 49% | 3123 | 56% |
|  |  | P1 | 3086 | 42 | 160 | 55% | 3009 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2989 | 34 | 258 | 52% | 2947 | 48% |
|  |  | T1 | 3035 | 24 | 466 | 48% | 3051 | 54% |
|  |  | P1 | 3027 | 39 | 200 | 48% | 3059 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2770 | 22 | 630 | 50% | 2766 | 40% |
|  |  | P1 | 2678 | 41 | 182 | 51% | 2674 | 43% |
|  |  | E1 | 2707 | 35 | 264 | 46% | 2746 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 34 | 260 | 52% | 2950 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2927 | 30 | 336 | 56% | 2869 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2660 | 36 | 264 | 53% | 2622 | 32% |