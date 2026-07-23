# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2670<sub>(+70) | 2973<sub>(+38) | 3031<sub>(+16) |  |
| 0.35 | 2026-05-13 | 2600<sub>(+111) | 2935<sub>(+70) | 3015<sub>(+99) |  |
| 0.30 | 2026-05-01 | 2489<sub>(+17) | 2865<sub>(+120) | 2916<sub>(+93) |  |
| 0.25.1 | 2026-04-12 | 2472<sub>(+88) | 2745<sub>(+98) | 2823<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2384<sub>(+517) | 2647<sub>(+594) | 2707<sub>(+565) |  |
| 0.08 | 2026-02-05 | 1867 | 2053 | 2142 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-23 06:25:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1867, 2384, 2472, 2489, 2600, 2670]
  line "STC (8.0+0.08s)" [1867, 2384, 2472, 2489, 2600, 2670]
  line "LTC (60.0+0.60s)" [2053, 2647, 2745, 2865, 2935, 2973]
  line "VLTC (2m24s+1.12s)" [2142, 2707, 2823, 2916, 3015, 3031]
  line "VLTC (2m24s+1.12s)" [2142, 2707, 2823, 2916, 3015, 3031]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3031 | 30 | 324 | 51% | 3019 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2973 | 31 | 330 | 50% | 2975 | 40% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2670 | 30 | 364 | 50% | 2669 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 28 | 388 | 51% | 3006 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 30 | 324 | 49% | 2944 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2600 | 31 | 340 | 50% | 2601 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 32 | 304 | 51% | 2908 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2865 | 30 | 336 | 49% | 2874 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2489 | 36 | 280 | 50% | 2485 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2823 | 31 | 328 | 51% | 2817 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 32 | 312 | 50% | 2746 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2472 | 31 | 356 | 51% | 2464 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2707 | 36 | 236 | 55% | 2657 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2647 | 36 | 228 | 57% | 2584 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2384 | 37 | 236 | 55% | 2338 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2142 | 28 | 392 | 46% | 2192 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2053 | 29 | 384 | 48% | 2080 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1867 | 31 | 356 | 48% | 1891 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |