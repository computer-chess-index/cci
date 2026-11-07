# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3441<sub>(+416) | 3692<sub>(+310) | 3735<sub>(+211) |  |
| 3.3.0 | 2026-10-09 | 3025<sub>(+417) | 3382<sub>(+319) | 3524<sub>(+322) |  |
| 2.0 | 2026-08-23 | 2608 | 3063 | 3202 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3606<sub>(+377) | 3829<sub>(+291) | 3827<sub>(+190) |  |
| 3.3.0 | 2026-10-09 | 3229<sub>(+398) | 3538<sub>(+271) | 3637<sub>(+209) |  |
| 2.0 | 2026-08-23 | 2831 | 3267 | 3428 |  |
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

Generated: 2026-11-07 05:41:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2600 --> 3900
  line "E1: STC (8.0+0.08s)" [2608, 3025, 3441]
  line "E1: LTC (60.0+0.60s)" [3063, 3382, 3692]
  line "E1: VLTC (2m24s+1.12s)" [3202, 3524, 3735]
  line "P1: STC (8.0+0.08s)" [2831, 3229, 3606]
  line "P1: LTC (60.0+0.60s)" [3267, 3538, 3829]
  line "P1: VLTC (2m24s+1.12s)" [3428, 3637, 3827]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3827 | 39 | 156 | 55% | 3794 | 81% |
|  |  | E1 | 3735 | 31 | 246 | 48% | 3749 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3692 | 33 | 214 | 54% | 3664 | 80% |
|  |  | P1 | 3829 | 40 | 148 | 48% | 3841 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3441 | 30 | 308 | 55% | 3398 | 61% |
|  |  | P1 | 3606 | 43 | 136 | 53% | 3576 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3637 | 43 | 134 | 53% | 3613 | 69% |
|  |  | E1 | 3524 | 34 | 208 | 50% | 3521 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3538 | 28 | 322 | 56% | 3491 | 68% |
|  |  | E1 | 3382 | 31 | 276 | 54% | 3347 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3229 | 36 | 216 | 50% | 3218 | 56% |
|  |  | E1 | 3025 | 36 | 226 | 54% | 2994 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3428 | 37 | 204 | 49% | 3438 | 54% |
|  |  | E1 | 3202 | 30 | 302 | 44% | 3251 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3063 | 30 | 322 | 42% | 3125 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3267 | 39 | 184 | 48% | 3281 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2608 | 35 | 298 | 39% | 2727 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2831 | 37 | 216 | 48% | 2842 | 43% |