# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2368<sub>(+242) | 2608<sub>(+217) | 2741<sub>(+258) |  |
| 1.5 | 2026-05-26 | 2126<sub>(+133) | 2391<sub>(+109) | 2483<sub>(+141) |  |
| 1.4 | 2026-04-25 | 1993<sub>(+488) | 2282<sub>(+434) | 2342<sub>(+380) |  |
| 1.3 | 2026-04-11 | 1505<sub>(+new) | 1848<sub>(+new) | 1962<sub>(+new) |  |
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

Generated: 2026-07-07 06:24:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1505, 1993, 2126, 2368]
  line "STC (8.0+0.08s)" [1505, 1993, 2126, 2368]
  line "LTC (60.0+0.60s)" [1848, 2282, 2391, 2608]
  line "VLTC (2m24s+1.12s)" [1962, 2342, 2483, 2741]
  line "VLTC (2m24s+1.12s)" [1962, 2342, 2483, 2741]
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
  line "STC (8.0+0.08s)" [1505, 1993, 2126, 2368]
  line "STC (8.0+0.08s)" [1505, 1993, 2126, 2368]
  line "LTC (60.0+0.60s)" [1848, 2282, 2391, 2608]
  line "VLTC (2m24s+1.12s)" [1962, 2342, 2483, 2741]
  line "VLTC (2m24s+1.12s)" [1962, 2342, 2483, 2741]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2741 | 32 | 314 | 46% | 2769 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2608 | 34 | 280 | 51% | 2593 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2368 | 36 | 256 | 53% | 2341 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2483 | 39 | 222 | 48% | 2496 | 25% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2391 | 46 | 154 | 51% | 2391 | 35% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2126 | 47 | 162 | 49% | 2134 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2342 | 29 | 420 | 51% | 2330 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2282 | 31 | 380 | 53% | 2249 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1993 | 30 | 406 | 51% | 1975 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1962 | 34 | 324 | 48% | 1978 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1848 | 32 | 364 | 50% | 1845 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1505 | 31 | 378 | 50% | 1500 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |