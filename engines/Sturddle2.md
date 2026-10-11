# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2769<sub>(+151) | 3052<sub>(+43) | 3174<sub>(+45) |  |
| 2.6.0 | 2026-08-09 | 2618 | 3009 | 3129 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2888<sub>(+58) | 3262<sub>(+30) | 3260<sub>(-35) |  |
| 2.6.0 | 2026-08-09 | 2830 | 3232 | 3295 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2799<sub>(+95) | 3109<sub>(+76) | 3158<sub>(-16) |  |
| 2.5.0 | 2026-02-04 | 2704<sub>(+77) | 3033<sub>(+18) | 3174<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2627 | 3015 | 3100 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sturddle2+<version>&body=###%20Engine%20name%0ASturddle2%0A%0A###%20Version%0A2.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 17:21:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2618, 2769]
  line "E1: LTC (60.0+0.60s)" [3009, 3052]
  line "E1: VLTC (2m24s+1.12s)" [3129, 3174]
  line "P1: STC (8.0+0.08s)" [2830, 2888]
  line "P1: LTC (60.0+0.60s)" [3232, 3262]
  line "P1: VLTC (2m24s+1.12s)" [3295, 3260]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "T1: STC (8.0+0.08s)" [2627, 2704, 2799]
  line "T1: LTC (60.0+0.60s)" [3015, 3033, 3109]
  line "T1: VLTC (2m24s+1.12s)" [3100, 3174, 3158]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 112 | 24 | 54% | 3220 | 33% |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 59 | 84 | 49% | 3177 | 46% |
| 2.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3262 | 106 | 24 | 54% | 3227 | 50% |
| 2.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3052 | 62 | 78 | 51% | 3046 | 40% |
| 2.7.0 | STC <sub>(8.0+0.08s)</sub> | 2888 | 95 | 36 | 54% | 2847 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | STC <sub>(8.0+0.08s)</sub> | 2769 | 65 | 72 | 58% | 2699 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3129 | 31 | 304 | 51% | 3123 | 52% |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3158 | 30 | 296 | 50% | 3160 | 56% |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3295 | 41 | 168 | 48% | 3316 | 54% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3109 | 29 | 332 | 50% | 3110 | 52% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3232 | 40 | 174 | 48% | 3248 | 52% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3009 | 31 | 294 | 47% | 3040 | 50% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2799 | 32 | 312 | 51% | 2790 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2830 | 40 | 204 | 48% | 2839 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2618 | 33 | 294 | 43% | 2682 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 23 | 514 | 52% | 3155 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3033 | 25 | 478 | 49% | 3044 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2704 | 23 | 626 | 50% | 2700 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3100 | 34 | 236 | 49% | 3105 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3015 | 37 | 224 | 51% | 2996 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2627 | 36 | 248 | 50% | 2623 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |