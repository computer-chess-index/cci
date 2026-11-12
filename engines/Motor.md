# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3337<sub>(+572) | 3614<sub>(+775) | 3672<sub>(+923) |  |
| 0.8.0 | 2024-10-28 | 2765 | 2839 | 2749 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3540<sub>(+700) | 3726<sub>(+new) | 3745<sub>(+855) |  |
| 0.8.0 | 2024-10-28 | 2840 |  | 2890 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3349<sub>(+14) | 3510<sub>(+20) | 3545<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3335<sub>(+115) | 3490<sub>(+68) | 3522<sub>(+71) |  |
| 0.60 | 2024-06-30 | 3220 | 3422 | 3451 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Motor+<version>&body=###%20Engine%20name%0AMotor%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:40:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 2700 --> 3800
  line "E1: STC (8.0+0.08s)" [2765, 3337]
  line "E1: LTC (60.0+0.60s)" [2839, 3614]
  line "E1: VLTC (2m24s+1.12s)" [2749, 3672]
  line "P1: STC (8.0+0.08s)" [3540]
  line "P1: LTC (60.0+0.60s)" [3726]
  line "P1: VLTC (2m24s+1.12s)" [3745]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3220, 3335, 3349]
  line "T1: LTC (60.0+0.60s)" [3422, 3490, 3510]
  line "T1: VLTC (2m24s+1.12s)" [3451, 3522, 3545]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3745 | 37 | 180 | 51% | 3735 | 77% |
|  |  | E1 | 3672 | 32 | 226 | 50% | 3675 | 84% |
|  |  | T1 | 3545 | 21 | 530 | 49% | 3549 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3726 | 35 | 192 | 51% | 3725 | 81% |
|  |  | E1 | 3614 | 29 | 288 | 47% | 3636 | 77% |
|  |  | T1 | 3510 | 22 | 500 | 50% | 3509 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3540 | 30 | 268 | 49% | 3548 | 76% |
|  |  | E1 | 3337 | 25 | 412 | 46% | 3364 | 66% |
|  |  | T1 | 3349 | 20 | 644 | 50% | 3347 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3522 | 13 | 1468 | 51% | 3518 | 86% |
|  |  | P1 | 2890 | 262 | 4 | 100% | 2577 | 0% |
|  |  | E1 | 2749 | 223 | 16 | 97% | 2171 | 6% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3490 | 13 | 1484 | 50% | 3488 | 83% |
|  |  | E1 | 2839 | 213 | 16 | 97% | 2307 | 6% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2840 | 190 | 4 | 50% | 2840 | 100% |
|  |  | E1 | 2765 | 177 | 8 | 63% | 2653 | 25% |
|  |  | T1 | 3335 | 13 | 1460 | 49% | 3340 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3451 | 28 | 304 | 50% | 3452 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3422 | 28 | 316 | 52% | 3406 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3220 | 29 | 352 | 56% | 3086 | 59% |