# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2877<sub>(+145) | 3201<sub>(+82) | 3290<sub>(+43) |  |
| 2.6.0 | 2026-08-09 | 2732 | 3119 | 3247 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2817<sub>(+28) | 3208<sub>(+4) | 3318<sub>(+50) |  |
| 2.6.0 | 2026-08-09 | 2789 | 3204 | 3268 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-10-24 04:43:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2732, 2877]
  line "E1: LTC (60.0+0.60s)" [3119, 3201]
  line "E1: VLTC (2m24s+1.12s)" [3247, 3290]
  line "P1: STC (8.0+0.08s)" [2789, 2817]
  line "P1: LTC (60.0+0.60s)" [3204, 3208]
  line "P1: VLTC (2m24s+1.12s)" [3268, 3318]
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

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3318 | 34 | 234 | 51% | 3306 | 55% |
|  |  | E1 | 3290 | 33 | 252 | 49% | 3294 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3208 | 40 | 170 | 51% | 3205 | 56% |
|  |  | E1 | 3201 | 35 | 236 | 51% | 3187 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2817 | 43 | 170 | 51% | 2811 | 34% |
|  |  | E1 | 2877 | 37 | 230 | 52% | 2862 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3158 | 30 | 296 | 50% | 3160 | 56% |
|  |  | P1 | 3268 | 41 | 168 | 48% | 3287 | 54% |
|  |  | E1 | 3247 | 31 | 304 | 51% | 3240 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 29 | 332 | 50% | 3110 | 52% |
|  |  | P1 | 3204 | 40 | 174 | 48% | 3220 | 52% |
|  |  | E1 | 3119 | 30 | 316 | 46% | 3154 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2799 | 32 | 312 | 51% | 2790 | 35% |
|  |  | P1 | 2789 | 39 | 216 | 48% | 2799 | 30% |
|  |  | E1 | 2732 | 33 | 302 | 44% | 2792 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3174 | 23 | 514 | 52% | 3155 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3033 | 25 | 478 | 49% | 3044 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2704 | 23 | 626 | 50% | 2700 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3100 | 34 | 236 | 49% | 3105 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 37 | 224 | 51% | 2996 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2627 | 36 | 248 | 50% | 2623 | 30% |