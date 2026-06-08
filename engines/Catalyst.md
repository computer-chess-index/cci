# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2650<sub>(+85) | 3066<sub>(+128) | 3117<sub>(+78) |  |
| 2.2.0 | 2026-04-03 | 2565<sub>(-18) | 2938<sub>(+31) | 3039<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2583<sub>(+6) | 2907<sub>(-28) | 2903<sub>(-66) |  |
| 2.0.0 | 2026-03-29 | 2577<sub>(+274) | 2935<sub>(+182) | 2969<sub>(+107) |  |
| 1.0.0 | 2026-03-26 | 2303 | 2753 | 2862 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:23:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2303, 2577, 2583, 2565, 2650]
  line "STC (8.0+0.08s)" [2303, 2577, 2583, 2565, 2650]
  line "LTC (60.0+0.60s)" [2753, 2935, 2907, 2938, 3066]
  line "VLTC (2m24s+1.12s)" [2862, 2969, 2903, 3039, 3117]
  line "VLTC (2m24s+1.12s)" [2862, 2969, 2903, 3039, 3117]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3117 | 38 | 202 | 48% | 3135 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3066 | 43 | 150 | 51% | 3062 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2650 | 50 | 128 | 50% | 2651 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3039 | 34 | 242 | 51% | 3033 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 35 | 238 | 50% | 2931 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2565 | 34 | 274 | 50% | 2565 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2903 | 31 | 292 | 49% | 2913 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2907 | 34 | 248 | 49% | 2911 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2583 | 35 | 256 | 48% | 2595 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2969 | 31 | 288 | 49% | 2975 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 32 | 280 | 51% | 2927 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2577 | 30 | 336 | 48% | 2592 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 32 | 302 | 49% | 2871 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2753 | 34 | 268 | 48% | 2770 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2303 | 35 | 272 | 46% | 2340 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |