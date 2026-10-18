# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 2893<sub>(+406) | 3235<sub>(+300) | 3390<sub>(+320) |  |
| 2.0 | 2026-08-23 | 2487 | 2935 | 3070 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 3127<sub>(+380) | 3418<sub>(+247) | 3540<sub>(+211) |  |
| 2.0 | 2026-08-23 | 2747 | 3171 | 3329 |  |
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

Generated: 2026-10-18 04:42:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2487, 2893]
  line "E1: LTC (60.0+0.60s)" [2935, 3235]
  line "E1: VLTC (2m24s+1.12s)" [3070, 3390]
  line "P1: STC (8.0+0.08s)" [2747, 3127]
  line "P1: LTC (60.0+0.60s)" [3171, 3418]
  line "P1: VLTC (2m24s+1.12s)" [3329, 3540]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3540 | 50 | 102 | 54% | 3507 | 70% |
|  |  | E1 | 3390 | 39 | 166 | 50% | 3384 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3418 | 36 | 198 | 57% | 3364 | 68% |
|  |  | E1 | 3235 | 37 | 190 | 54% | 3197 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3127 | 38 | 192 | 51% | 3110 | 57% |
|  |  | E1 | 2893 | 38 | 206 | 53% | 2863 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3329 | 37 | 204 | 49% | 3340 | 54% |
|  |  | E1 | 3070 | 30 | 302 | 44% | 3120 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2935 | 30 | 322 | 42% | 2998 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3171 | 39 | 184 | 48% | 3185 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2487 | 35 | 298 | 39% | 2606 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2747 | 37 | 216 | 48% | 2757 | 43% |