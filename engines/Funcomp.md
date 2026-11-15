# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3263<sub>(+31) | 3505<sub>(+37) | 3537<sub>(+5) |  |
| 3.0 | 2026-10-20 | 3232<sub>(+496) | 3468<sub>(+352) | 3532<sub>(+349) |  |
| 2.0 | 2026-10-03 | 2736 | 3116 | 3183 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3289<sub>(+53) | 3460<sub>(+57) | 3507<sub>(+52) |  |
| 3.0 | 2026-10-20 | 3236<sub>(+529) | 3403<sub>(+415) | 3455<sub>(+330) |  |
| 2.0 | 2026-10-03 | 2707 | 2988 | 3125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-09-28 | 2576 | 2809 | 2966 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Funcomp+<version>&body=###%20Engine%20name%0AFuncomp%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:38:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3600
  line "E1: STC (8.0+0.08s)" [2736, 3232, 3263]
  line "E1: LTC (60.0+0.60s)" [3116, 3468, 3505]
  line "E1: VLTC (2m24s+1.12s)" [3183, 3532, 3537]
  line "P1: STC (8.0+0.08s)" [2707, 3236, 3289]
  line "P1: LTC (60.0+0.60s)" [2988, 3403, 3460]
  line "P1: VLTC (2m24s+1.12s)" [3125, 3455, 3507]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3537 | 32 | 222 | 50% | 3538 | 83% |
|  |  | P1 | 3507 | 36 | 178 | 52% | 3494 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3460 | 37 | 184 | 53% | 3438 | 68% |
|  |  | E1 | 3505 | 31 | 257 | 52% | 3494 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3289 | 38 | 176 | 51% | 3286 | 65% |
|  |  | E1 | 3263 | 32 | 256 | 51% | 3259 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3455 | 40 | 158 | 57% | 3401 | 75% |
|  |  | E1 | 3532 | 35 | 204 | 52% | 3510 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3403 | 44 | 132 | 57% | 3340 | 70% |
|  |  | E1 | 3468 | 36 | 200 | 55% | 3430 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3236 | 53 | 100 | 57% | 3151 | 61% |
|  |  | E1 | 3232 | 32 | 276 | 53% | 3197 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3125 | 40 | 192 | 57% | 3036 | 46% |
|  |  | E1 | 3183 | 34 | 272 | 54% | 3116 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2988 | 40 | 212 | 61% | 2785 | 43% |
|  |  | E1 | 3116 | 35 | 262 | 53% | 3035 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2707 | 45 | 168 | 51% | 2681 | 28% |
|  |  | E1 | 2736 | 34 | 302 | 57% | 2618 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |