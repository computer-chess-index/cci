# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2889<sub>(+93) | 3156<sub>(+89) | 3244<sub>(+78) |  |
| 1.1.0 | 2026-02-28 | 2796<sub>(+348) | 3067<sub>(+358) | 3166<sub>(+322) |  |
| 1.0.4 | 2026-01-16 | 2448<sub>(+127) | 2709<sub>(+37) | 2844<sub>(+99) |  |
| 1.0.3 | 2026-01-04 | 2321<sub>(+26) | 2672<sub>(+114) | 2745<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2295<sub>(+30) | 2558<sub>(+19) | 2672<sub>(-52) |  |
| 1.0.1 | 2025-12-10 | 2265<sub>(+33) | 2539<sub>(-13) | 2724<sub>(-52) |  |
| 1.0.0 | 2025-12-05 | 2232 | 2552 | 2776 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-21 06:24:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2232, 2265, 2295, 2321, 2448, 2796, 2889]
  line "STC (8.0+0.08s)" [2232, 2265, 2295, 2321, 2448, 2796, 2889]
  line "LTC (60.0+0.60s)" [2552, 2539, 2558, 2672, 2709, 3067, 3156]
  line "VLTC (2m24s+1.12s)" [2776, 2724, 2672, 2745, 2844, 3166, 3244]
  line "VLTC (2m24s+1.12s)" [2776, 2724, 2672, 2745, 2844, 3166, 3244]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 29 | 308 | 50% | 3240 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3156 | 30 | 318 | 49% | 3167 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2889 | 30 | 336 | 52% | 2876 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3166 | 27 | 392 | 53% | 3146 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3067 | 28 | 356 | 51% | 3055 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2796 | 28 | 398 | 51% | 2785 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2844 | 34 | 272 | 49% | 2853 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 35 | 252 | 50% | 2712 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2448 | 31 | 348 | 55% | 2403 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 43 | 172 | 50% | 2749 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2672 | 45 | 160 | 51% | 2665 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2321 | 44 | 172 | 51% | 2314 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2672 | 38 | 214 | 50% | 2672 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 35 | 264 | 46% | 2596 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2295 | 41 | 212 | 55% | 2250 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2724 | 42 | 180 | 52% | 2709 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2539 | 40 | 202 | 53% | 2512 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2265 | 50 | 142 | 48% | 2284 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2776 | 61 | 92 | 42% | 2844 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2552 | 59 | 92 | 46% | 2587 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2232 | 67 | 82 | 59% | 2147 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |