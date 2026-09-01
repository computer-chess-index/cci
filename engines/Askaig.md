# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3005<sub>(-14) | 3276<sub>(+66) | 3289<sub>(+33) |  |
| 20260704 | 2026-07-04 | 3019<sub>(+613) | 3210<sub>(+538) | 3256<sub>(+534) |  |
| 20260628 | 2026-06-28 | 2406<sub>(-1) | 2672<sub>(+23) | 2722<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2407<sub>(+new) | 2649<sub>(+new) | 2745<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-01 04:32:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "" [2407, 2406, 3019, 3005]
  line "STC (8.0+0.08s)" [2407, 2406, 3019, 3005]
  line "LTC (60.0+0.60s)" [2649, 2672, 3210, 3276]
  line "" [2745, 2722, 3256, 3289]
  line "VLTC (2m24s+1.12s)" [2745, 2722, 3256, 3289]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3289 | 31 | 290 | 50% | 3291 | 52% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3276 | 29 | 332 | 51% | 3270 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3005 | 29 | 364 | 53% | 2978 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3256 | 31 | 312 | 54% | 3221 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 30 | 320 | 53% | 3182 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3019 | 32 | 312 | 53% | 2989 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2722 | 46 | 148 | 51% | 2711 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2672 | 53 | 116 | 49% | 2681 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2406 | 53 | 116 | 50% | 2404 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 47 | 144 | 51% | 2732 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 47 | 148 | 46% | 2682 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2407 | 41 | 196 | 44% | 2466 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |