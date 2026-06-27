# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2367<sub>(+242) | 2607<sub>(+222) | 2739<sub>(+270) |  |
| 1.5 | 2026-05-26 | 2125<sub>(+132) | 2385<sub>(+105) | 2469<sub>(+128) |  |
| 1.4 | 2026-04-25 | 1993<sub>(+486) | 2280<sub>(+433) | 2341<sub>(+379) |  |
| 1.3 | 2026-04-11 | 1507<sub>(+new) | 1847<sub>(+new) | 1962<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
| 1.1 | 2026-03-11 |  |  |  |  |
| 1.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-27 06:24:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1507, 1993, 2125, 2367]
  line "STC (8.0+0.08s)" [1507, 1993, 2125, 2367]
  line "LTC (60.0+0.60s)" [1847, 2280, 2385, 2607]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2469, 2739]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2469, 2739]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1507, 1993, 2125, 2367]
  line "STC (8.0+0.08s)" [1507, 1993, 2125, 2367]
  line "LTC (60.0+0.60s)" [1847, 2280, 2385, 2607]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2469, 2739]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2469, 2739]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2739 | 32 | 314 | 46% | 2768 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2607 | 34 | 280 | 51% | 2592 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2367 | 36 | 256 | 53% | 2340 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2469 | 43 | 182 | 47% | 2499 | 26% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2385 | 50 | 134 | 50% | 2388 | 32% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2125 | 47 | 158 | 49% | 2133 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2341 | 29 | 420 | 51% | 2329 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2280 | 31 | 380 | 53% | 2248 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1993 | 30 | 406 | 51% | 1974 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1962 | 34 | 324 | 48% | 1978 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1847 | 32 | 364 | 50% | 1844 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1507 | 32 | 378 | 50% | 1500 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |