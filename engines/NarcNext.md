# Engine: NarcNext

Author: Madushan B. Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3181<sub>(-12) | 3406<sub>(0) | 3449<sub>(-26) |  |
| 5.0 | 2026-11-02 | 3193<sub>(+401) | 3406<sub>(+251) | 3475<sub>(+219) |  |
| 4.1 | 2026-08-06 | 2792 | 3155 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3195<sub>(+22) | 3424<sub>(+56) | 3420<sub>(+22) |  |
| 5.0 | 2026-11-02 | 3173<sub>(+387) | 3368<sub>(+220) | 3398<sub>(+151) |  |
| 4.1 | 2026-08-06 | 2786 | 3148 | 3247 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-08-06 | 2871 | 3163 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+NarcNext+<version>&body=###%20Engine%20name%0ANarcNext%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:40:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2792, 3193, 3181]
  line "E1: LTC (60.0+0.60s)" [3155, 3406, 3406]
  line "E1: VLTC (2m24s+1.12s)" [3256, 3475, 3449]
  line "P1: STC (8.0+0.08s)" [2786, 3173, 3195]
  line "P1: LTC (60.0+0.60s)" [3148, 3368, 3424]
  line "P1: VLTC (2m24s+1.12s)" [3247, 3398, 3420]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3420 | 46 | 110 | 50% | 3417 | 83% |
|  |  | E1 | 3449 | 31 | 250 | 51% | 3440 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3424 | 41 | 144 | 49% | 3430 | 74% |
|  |  | E1 | 3406 | 32 | 242 | 51% | 3402 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3195 | 39 | 172 | 48% | 3216 | 64% |
|  |  | E1 | 3181 | 28 | 330 | 50% | 3185 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3398 | 43 | 134 | 53% | 3382 | 72% |
|  |  | E1 | 3475 | 32 | 248 | 54% | 3444 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3368 | 33 | 230 | 56% | 3325 | 75% |
|  |  | E1 | 3406 | 31 | 268 | 54% | 3375 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3173 | 43 | 150 | 51% | 3160 | 59% |
|  |  | E1 | 3193 | 30 | 312 | 52% | 3151 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3247 | 31 | 276 | 48% | 3260 | 57% |
|  |  | E1 | 3256 | 27 | 378 | 47% | 3278 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3148 | 35 | 226 | 49% | 3156 | 56% |
|  |  | E1 | 3155 | 28 | 372 | 48% | 3167 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2786 | 37 | 236 | 46% | 2830 | 38% |
|  |  | E1 | 2792 | 29 | 386 | 45% | 2839 | 37% |