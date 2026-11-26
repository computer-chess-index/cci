# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2797<sub>(-25) | 3144<sub>(-11) | 3262<sub>(-8) |  |
| 0.4.1 | 2026-11-01 | 2822<sub>(+63) | 3155<sub>(-8) | 3270<sub>(+76) |  |
| 0.3.2 | 2026-10-27 | 2759 | 3163 | 3194 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2882<sub>(+63) | 3231<sub>(+44) | 3294<sub>(+50) |  |
| 0.4.1 | 2026-11-01 | 2819<sub>(+60) | 3187<sub>(+73) | 3244<sub>(+5) |  |
| 0.3.2 | 2026-10-27 | 2759 | 3114 | 3239 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.2 | 2026-10-27 | 2759 | 3114 | 3239 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arabica+<version>&body=###%20Engine%20name%0AArabica%0A%0A###%20Version%0A0.4.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:35:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.2", "0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2759, 2822, 2797]
  line "E1: LTC (60.0+0.60s)" [3163, 3155, 3144]
  line "E1: VLTC (2m24s+1.12s)" [3194, 3270, 3262]
  line "P1: STC (8.0+0.08s)" [2759, 2819, 2882]
  line "P1: LTC (60.0+0.60s)" [3114, 3187, 3231]
  line "P1: VLTC (2m24s+1.12s)" [3239, 3244, 3294]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3294 | 38 | 190 | 51% | 3285 | 58% |
|  |  | E1 | 3262 | 33 | 256 | 49% | 3272 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3231 | 46 | 128 | 51% | 3221 | 54% |
|  |  | E1 | 3144 | 39 | 192 | 49% | 3151 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2882 | 39 | 188 | 53% | 2855 | 47% |
|  |  | E1 | 2797 | 32 | 290 | 47% | 2826 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3270 | 32 | 270 | 51% | 3254 | 56% |
|  |  | P1 | 3244 | 34 | 240 | 51% | 3221 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3155 | 29 | 358 | 56% | 3082 | 54% |
|  |  | P1 | 3187 | 34 | 252 | 52% | 3137 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2819 | 37 | 232 | 52% | 2772 | 39% |
|  |  | E1 | 2822 | 30 | 384 | 57% | 2720 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3239 | 41 | 160 | 54% | 3208 | 58% |
|  |  | E1 | 3194 | 32 | 268 | 49% | 3204 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3114 | 48 | 120 | 48% | 3129 | 55% |
|  |  | E1 | 3163 | 40 | 180 | 49% | 3166 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2759 | 44 | 160 | 51% | 2757 | 40% |
|  |  | E1 | 2759 | 33 | 290 | 46% | 2795 | 37% |