# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2839<sub>(+120) | 3163<sub>(+161) | 3225<sub>(+69) |  |
| 1.5 | 2026-01-22 | 2719 | 3002 | 3156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2944<sub>(+176) | 3286<sub>(+143) | 3374<sub>(+152) |  |
| 1.5 | 2026-01-22 | 2768 | 3143 | 3222 |  |
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

Generated: 2026-10-22 04:45:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.6"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2719, 2839]
  line "E1: LTC (60.0+0.60s)" [3002, 3163]
  line "E1: VLTC (2m24s+1.12s)" [3156, 3225]
  line "P1: STC (8.0+0.08s)" [2768, 2944]
  line "P1: LTC (60.0+0.60s)" [3143, 3286]
  line "P1: VLTC (2m24s+1.12s)" [3222, 3374]
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
|  |  | P1 | 3374 | 53 | 96 | 52% | 3363 | 55% |
|  |  | E1 | 3225 | 35 | 218 | 49% | 3236 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3139 | 36 | 214 | 51% | 3128 | 58% |
|  |  | P1 | 3286 | 52 | 106 | 50% | 3285 | 52% |
|  |  | E1 | 3163 | 35 | 236 | 48% | 3178 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2842 | 41 | 168 | 52% | 2826 | 51% |
|  |  | P1 | 2944 | 45 | 140 | 51% | 2936 | 49% |
|  |  | E1 | 2839 | 43 | 164 | 51% | 2840 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3222 | 45 | 144 | 55% | 3132 | 53% |
|  |  | E1 | 3156 | 33 | 292 | 57% | 3062 | 47% |
|  |  | T1 | 3113 | 22 | 592 | 49% | 3123 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3002 | 36 | 232 | 53% | 2943 | 49% |
|  |  | T1 | 3035 | 24 | 466 | 48% | 3051 | 54% |
|  |  | P1 | 3143 | 44 | 158 | 46% | 3189 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2719 | 36 | 252 | 45% | 2763 | 36% |
|  |  | T1 | 2770 | 22 | 630 | 50% | 2766 | 40% |
|  |  | P1 | 2768 | 44 | 156 | 48% | 2789 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 34 | 260 | 52% | 2950 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2927 | 30 | 336 | 56% | 2869 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2660 | 36 | 264 | 53% | 2622 | 32% |