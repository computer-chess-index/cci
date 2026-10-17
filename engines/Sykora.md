# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2738 | 3147 | 3293 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2886 | 3457 | 3383 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2955<sub>(+235) | 3287<sub>(+177) | 3376<sub>(+182) |  |
| 3.1 | 2026-07-15 | 2720<sub>(+374) | 3110<sub>(+98) | 3194<sub>(+131) |  |
| 3.0 | 2026-07-12 | 2346<sub>(+337) | 3012<sub>(+645) | 3063<sub>(+613) |  |
| 0.2.1 | 2026-03-02 | 2009<sub>(+115) | 2367<sub>(+134) | 2450<sub>(+24) |  |
| 0.1.0 | 2026-02-17 | 1894 | 2233 | 2426 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-17 04:43:40

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "T1: STC (8.0+0.08s)" [1894, 2009, 2346, 2720, 2955]
  line "T1: LTC (60.0+0.60s)" [2233, 2367, 3012, 3110, 3287]
  line "T1: VLTC (2m24s+1.12s)" [2426, 2450, 3063, 3194, 3376]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3376 | 30 | 262 | 48% | 3386 | 78% |
|  |  | P1 | 3383 | 80 | 44 | 61% | 3085 | 59% |
|  |  | E1 | 3293 | 50 | 124 | 61% | 3042 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3287 | 33 | 224 | 54% | 3260 | 76% |
|  |  | P1 | 3457 | 80 | 42 | 56% | 3372 | 64% |
|  |  | E1 | 3147 | 36 | 220 | 61% | 2965 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2955 | 33 | 236 | 55% | 2916 | 72% |
|  |  | P1 | 2886 | 82 | 44 | 64% | 2778 | 55% |
|  |  | E1 | 2738 | 49 | 112 | 59% | 2574 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3194 | 44 | 132 | 50% | 3191 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3110 | 44 | 132 | 52% | 3101 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2720 | 46 | 126 | 51% | 2707 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3063 | 48 | 124 | 56% | 2998 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3012 | 56 | 96 | 54% | 2965 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2346 | 34 | 240 | 65% | 2236 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2450 | 36 | 254 | 53% | 2426 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2367 | 33 | 304 | 50% | 2363 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2009 | 34 | 306 | 51% | 1998 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2426 | 126 | 28 | 21% | 2730 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2233 | 70 | 70 | 46% | 2265 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1894 | 97 | 40 | 41% | 2016 | 23% |