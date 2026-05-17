# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2167<sub>(+100) | 2445<sub>(+155) | 2495<sub>(+126) |  |
| 0.2.3 | 2025-12-08 | 2067<sub>(+33) | 2290<sub>(-24) | 2369<sub>(+17) |  |
| 0.2.2 | 2025-11-29 | 2034<sub>(+67) | 2314<sub>(+81) | 2352<sub>(-20) |  |
| 0.2.1 | 2025-11-16 | 1967<sub>(-70) | 2233<sub>(-28) | 2372<sub>(-51) |  |
| 0.2 | 2025-11-15 | 2037<sub>(+new) | 2261<sub>(+new) | 2423<sub>(+new) |  |
| 0.1-alpha | 2025-03-29 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:25:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [2037, 1967, 2034, 2067, 2167]
  line "STC (8.0+0.08s)" [2037, 1967, 2034, 2067, 2167]
  line "LTC (60.0+0.60s)" [2261, 2233, 2314, 2290, 2445]
  line "VLTC (2m24s+1.12s)" [2423, 2372, 2352, 2369, 2495]
  line "VLTC (2m24s+1.12s)" [2423, 2372, 2352, 2369, 2495]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2495 | 30 | 380 | 52% | 2468 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2445 | 31 | 360 | 52% | 2426 | 23% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2167 | 32 | 342 | 52% | 2141 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2369 | 31 | 362 | 48% | 2387 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2290 | 31 | 376 | 51% | 2275 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2067 | 28 | 468 | 49% | 2075 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2352 | 53 | 128 | 53% | 2322 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2314 | 66 | 76 | 51% | 2313 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 2034 | 59 | 104 | 49% | 2047 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2372 | 55 | 132 | 44% | 2448 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2233 | 64 | 88 | 46% | 2272 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1967 | 70 | 76 | 50% | 1967 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2423 | 56 | 116 | 52% | 2404 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2261 | 47 | 160 | 49% | 2273 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 2037 | 59 | 100 | 54% | 1997 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |