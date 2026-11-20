# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2851<sub>(+148) | 3133<sub>(+149) | 3212<sub>(+73) |  |
| 1.5 | 2026-01-22 | 2703 | 2984 | 3139 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2801<sub>(+147) | 3124<sub>(+142) | 3198<sub>(+135) |  |
| 1.5 | 2026-01-22 | 2654 | 2982 | 3063 |  |
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

Generated: 2026-11-20 05:44:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.6"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2703, 2851]
  line "E1: LTC (60.0+0.60s)" [2984, 3133]
  line "E1: VLTC (2m24s+1.12s)" [3139, 3212]
  line "P1: STC (8.0+0.08s)" [2654, 2801]
  line "P1: LTC (60.0+0.60s)" [2982, 3124]
  line "P1: VLTC (2m24s+1.12s)" [3063, 3198]
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
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3198 | 37 | 192 | 51% | 3193 | 58% |
|  |  | E1 | 3212 | 28 | 334 | 49% | 3220 | 61% |
|  |  | T1 | 3235 | 35 | 224 | 47% | 3255 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3124 | 40 | 170 | 51% | 3113 | 56% |
|  |  | E1 | 3133 | 28 | 370 | 48% | 3151 | 52% |
|  |  | T1 | 3139 | 36 | 214 | 51% | 3128 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2801 | 35 | 236 | 50% | 2772 | 47% |
|  |  | E1 | 2851 | 28 | 372 | 52% | 2842 | 44% |
|  |  | T1 | 2842 | 41 | 168 | 52% | 2826 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3113 | 22 | 592 | 49% | 3123 | 56% |
|  |  | P1 | 3063 | 43 | 152 | 55% | 2979 | 54% |
|  |  | E1 | 3139 | 32 | 310 | 57% | 3047 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3035 | 24 | 466 | 48% | 3051 | 54% |
|  |  | P1 | 2982 | 40 | 184 | 45% | 3036 | 47% |
|  |  | E1 | 2984 | 34 | 254 | 51% | 2944 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2770 | 22 | 630 | 50% | 2766 | 40% |
|  |  | P1 | 2654 | 42 | 170 | 50% | 2653 | 42% |
|  |  | E1 | 2703 | 35 | 260 | 46% | 2745 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 34 | 260 | 52% | 2950 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2927 | 30 | 336 | 56% | 2869 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2660 | 36 | 264 | 53% | 2622 | 32% |