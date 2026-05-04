# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2163<sub>(+99) | 2437<sub>(+151) | 2489<sub>(+124) |  |
| 0.2.3 | 2025-12-08 | 2064<sub>(+34) | 2286<sub>(-24) | 2365<sub>(+17) |  |
| 0.2.2 | 2025-11-29 | 2030<sub>(+66) | 2310<sub>(+81) | 2348<sub>(-20) |  |
| 0.2.1 | 2025-11-16 | 1964<sub>(-69) | 2229<sub>(-28) | 2368<sub>(-51) |  |
| 0.2 | 2025-11-15 | 2033<sub>(+new) | 2257<sub>(+new) | 2419<sub>(+new) |  |
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

Generated: 2026-05-04 06:25:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [2033, 1964, 2030, 2064, 2163]
  line "STC (8.0+0.08s)" [2033, 1964, 2030, 2064, 2163]
  line "LTC (60.0+0.60s)" [2257, 2229, 2310, 2286, 2437]
  line "VLTC (2m24s+1.12s)" [2419, 2368, 2348, 2365, 2489]
  line "VLTC (2m24s+1.12s)" [2419, 2368, 2348, 2365, 2489]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2489 | 32 | 348 | 52% | 2460 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2437 | 32 | 348 | 51% | 2422 | 24% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2163 | 34 | 310 | 53% | 2134 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2365 | 31 | 362 | 48% | 2383 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2286 | 31 | 376 | 51% | 2271 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2064 | 28 | 468 | 49% | 2071 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2348 | 53 | 128 | 53% | 2318 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2310 | 66 | 76 | 51% | 2307 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 2030 | 59 | 104 | 49% | 2044 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2368 | 55 | 132 | 44% | 2442 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 64 | 88 | 46% | 2269 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1964 | 70 | 76 | 50% | 1963 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2419 | 56 | 116 | 52% | 2399 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2257 | 47 | 160 | 49% | 2269 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 2033 | 59 | 100 | 54% | 1993 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |