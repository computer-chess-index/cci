# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2851<sub>(+150) | 3132<sub>(+150) | 3202<sub>(+69) |  |
| 1.5 | 2026-01-22 | 2701 | 2982 | 3133 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2831<sub>(+154) | 3146<sub>(+121) | 3222<sub>(+137) |  |
| 1.5 | 2026-01-22 | 2677 | 3025 | 3085 |  |
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

Generated: 2026-11-26 05:44:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.6"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2701, 2851]
  line "E1: LTC (60.0+0.60s)" [2982, 3132]
  line "E1: VLTC (2m24s+1.12s)" [3133, 3202]
  line "P1: STC (8.0+0.08s)" [2677, 2831]
  line "P1: LTC (60.0+0.60s)" [3025, 3146]
  line "P1: VLTC (2m24s+1.12s)" [3085, 3222]
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
|  |  | P1 | 3222 | 37 | 200 | 50% | 3220 | 59% |
|  |  | E1 | 3202 | 28 | 350 | 49% | 3214 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3146 | 38 | 186 | 51% | 3141 | 56% |
|  |  | E1 | 3132 | 27 | 394 | 48% | 3147 | 51% |
|  |  | T1 | 3139 | 36 | 214 | 51% | 3128 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2831 | 34 | 260 | 51% | 2800 | 46% |
|  |  | E1 | 2851 | 27 | 412 | 52% | 2836 | 43% |
|  |  | T1 | 2842 | 41 | 168 | 52% | 2826 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3113 | 22 | 592 | 49% | 3123 | 56% |
|  |  | P1 | 3085 | 42 | 160 | 55% | 3008 | 54% |
|  |  | E1 | 3133 | 32 | 310 | 57% | 3042 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3035 | 24 | 466 | 48% | 3051 | 54% |
|  |  | P1 | 3025 | 39 | 200 | 48% | 3059 | 46% |
|  |  | E1 | 2982 | 34 | 258 | 52% | 2940 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2770 | 22 | 630 | 50% | 2766 | 40% |
|  |  | P1 | 2677 | 41 | 182 | 51% | 2674 | 43% |
|  |  | E1 | 2701 | 35 | 268 | 46% | 2741 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 34 | 260 | 52% | 2950 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2927 | 30 | 336 | 56% | 2869 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2660 | 36 | 264 | 53% | 2622 | 32% |