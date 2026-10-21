# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 2944<sub>(+409) | 3303<sub>(+317) | 3448<sub>(+324) |  |
| 2.0 | 2026-08-23 | 2535 | 2986 | 3124 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 3159<sub>(+387) | 3468<sub>(+270) | 3567<sub>(+208) |  |
| 2.0 | 2026-08-23 | 2772 | 3198 | 3359 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-21 04:42:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0"]
  y-axis "Elo Rating" 2500 --> 3600
  line "E1: STC (8.0+0.08s)" [2535, 2944]
  line "E1: LTC (60.0+0.60s)" [2986, 3303]
  line "E1: VLTC (2m24s+1.12s)" [3124, 3448]
  line "P1: STC (8.0+0.08s)" [2772, 3159]
  line "P1: LTC (60.0+0.60s)" [3198, 3468]
  line "P1: VLTC (2m24s+1.12s)" [3359, 3567]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3567 | 45 | 126 | 54% | 3541 | 69% |
|  |  | E1 | 3448 | 36 | 188 | 50% | 3440 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3303 | 32 | 248 | 55% | 3262 | 67% |
|  |  | P1 | 3468 | 30 | 282 | 58% | 3411 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2944 | 36 | 218 | 53% | 2917 | 50% |
|  |  | P1 | 3159 | 37 | 200 | 51% | 3141 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3359 | 37 | 204 | 49% | 3370 | 54% |
|  |  | E1 | 3124 | 30 | 302 | 44% | 3174 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3198 | 39 | 184 | 48% | 3212 | 52% |
|  |  | E1 | 2986 | 30 | 322 | 42% | 3050 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2772 | 37 | 216 | 48% | 2781 | 43% |
|  |  | E1 | 2535 | 35 | 298 | 39% | 2654 | 26% |